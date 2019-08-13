import { Flex } from './../../classes/Flex';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /**
   * Entrada de dados
   */
  consumoAlcool: number;
  consumoGasolina: number;
  precoAlcool: number;
  precoGasolina: number;

  /**
   * Exibição dos resultados
   */
  gastoGasolina: number;
  gastoAlcool: number;
  melhor: string; // A= álcool, G - gasolina

  /**
   * Objeto da classe Flex
   */
  private _flex : Flex;

  constructor(public navCtrl: NavController) {}

  public calcular(){
    try{
      this._flex = new Flex(
        this.consumoAlcool,
        this.consumoGasolina,
        this.precoAlcool,
        this.precoGasolina
      );

      this.gastoGasolina = this._flex.gastoGasolina;
      this.gastoAlcool = this._flex.gastoAlcool;
      this.melhor = this._flex.melhor;
    } catch(e) {
      console.error(e);
    }
  }

}
