import { LightningElement, api } from "lwc";
/**
 * Show an item
 */
export default class Card extends LightningElement {
  @api iconName;
  @api showIcon=false;


}