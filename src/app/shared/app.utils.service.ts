import { Injectable } from '@angular/core';


@Injectable()
export class UtilService {

    //Feature highlight Border function --START
    featureActivated = { shirt: '', pant: '', jacket: '', kudta: '', pajama: '', coat: '', safarisuit: '', indowestern: '' };

    featureHighlight(selectedCustomer: any) {
        selectedCustomer.custSubscriptions.shirt.L ? this.featureActivated.shirt = 'highlight' : this.featureActivated.shirt = '';
        selectedCustomer.custSubscriptions.pant.L ? this.featureActivated.pant = 'highlight' : this.featureActivated.pant = '';
        selectedCustomer.custSubscriptions.kudta.L ? this.featureActivated.kudta = 'highlight' : this.featureActivated.kudta = '';
        selectedCustomer.custSubscriptions.pajama.L ? this.featureActivated.pajama = 'highlight' : this.featureActivated.pajama = '';
        selectedCustomer.custSubscriptions.jacket.L ? this.featureActivated.jacket = 'highlight' : this.featureActivated.jacket = '';
        selectedCustomer.custSubscriptions.coat.L ? this.featureActivated.coat = 'highlight' : this.featureActivated.coat = '';
        selectedCustomer.custSubscriptions.indo.L ? this.featureActivated.indowestern = 'highlight' : this.featureActivated.indowestern = '';
        selectedCustomer.custSubscriptions.safari.L ? this.featureActivated.safarisuit = 'highlight' : this.featureActivated.safarisuit = '';
        return this.featureActivated;
    }
    //Feature highlight Border function --END

}