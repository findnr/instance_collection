/*
 * @Author: findnr
 * @Date: 2024-03-30 21:38:33
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-08 11:48:51
 * @Description: 
 */
import os from "./os"
import development from "./development"
import network from "./network"
import maxmodel from "./maxmodel"
import job from "./job.js"
import soft from "./soft"
import owndevel from "./owndevel"

export default function setNav() {
    return [os,development,network,maxmodel,job,soft,owndevel]
}