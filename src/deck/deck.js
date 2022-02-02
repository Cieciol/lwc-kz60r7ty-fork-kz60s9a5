import { LightningElement } from "lwc";
import {cardTypes} from "../card/cardTypes"
// const cardTypes = ['action:approvalz'];
/**
 * Show an item
 */
export default class Deck extends LightningElement {
  cards;
  connectedCallback(){
    this.cards = cardTypes.map(function(ct){
      return {name: ct, size: "large"}
      }); 
  }

}