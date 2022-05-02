import React  from "react";
import { useState } from "react";
import "./App.css"
import { Text,Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";

const MainPage=() => {
    const account ="0xcb"

    return(
        <div>
            Account : {account}
        </div>
    )
}
