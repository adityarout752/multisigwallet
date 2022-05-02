// const chai = require("chai");
// // chai.use(require("chai-as-promised"))

const MultiSigWallet = artifacts.require("MultiSigWallet");

contract("MultiSigWallet",accounts => {
    const owner = [accounts[0],accounts[1],accounts[2]]
    const Num_CONFIRMATIONS_REQUIRED = 2;

    let wallet;
    beforeEach(async() => {
        wallet = await MultiSigWallet.new(owner,Num_CONFIRMATIONS_REQUIRED)
    })


    describe("executeTransaction",() => {
        beforeEach(async() => {
            const to=owner[0]
            const value=0
            const data ="0x0"
            await wallet.submitTransaction(to,value,data)
            await wallet.confirmTransaction(0,{from:owner[0]})
            await wallet.confirmTransaction(0,{from:owner[1]})
        })
    
        //execute transactions should succedd
    
        it("should execute  transaction after confirmation", async () => {
           
    
            const res = await wallet.executeTransaction(0,{from:owner[0]})
       
           const { logs } = res
    
           assert.equal(logs[0].event,"ExecuteTransaction")
           assert.equal(logs[0].args.owner,owner[0])
           assert.equal(logs[0].args.txIndex,0)
    
           const tx = await wallet.getTransaction(0)
           assert.equal(tx.executed,true)
    
        })
    
        // it should fail transaction
    
        it("should fail the transaction if already executed ",async() => {
            await wallet.executeTransaction(0,{from: owner[0]})
            
            try{
            await wallet.executeTransaction(0,{from : owner[0]})
            throw new Error("tx did not fail")

            } catch(error) {
             assert.equal(error.reason,"tx alredy executed")
            }
        })
    
    })
   
    
})
