/*
 * @Author: findnr
 * @Date: 2024-03-30 21:38:33
 * @LastEditors: findnr
 * @LastEditTime: 2024-03-31 10:18:00
 * @Description: 
 */
import os from "./os"
import development from "./development"
import network from "./network"

export default function setNav() {
    return [os,development,network]
}