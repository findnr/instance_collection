/*
 * @Author: findnr
 * @Date: 2024-03-30 21:38:33
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-02 21:09:59
 * @Description: 
 */
import os from "./os"
import development from "./development"
import network from "./network"
import maxmodel from "./maxmodel"
import job from "./job.js"

export default function setNav() {
    return [os,development,network,maxmodel,job]
}