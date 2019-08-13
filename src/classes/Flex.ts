
export class Flex {

  /**
   * Atributos de entrada
   */
  private _consumoAlcool: number = undefined;
  private _consumoGasolina: number = undefined;
  private _precoAlcool: number = undefined;
  private _precoGasolina: number = undefined;

  /**
   * Atributos de saída
   */
  private _gastoGasolina: number = undefined;
  private _gastoAlcool: number = undefined;
  private _melhor: string = undefined; // A= álcool, G - gasolina, E - empate

  /**
   * Construtor
   */
  constructor(
    pConsumoAlcool: number,
    pConsumoGasolina: number,
    pPrecoAlcool: number,
    pPrecoGasolina: number,
  ){
    this._consumoAlcool = pConsumoAlcool;
    this._consumoGasolina = pConsumoGasolina;
    this._precoAlcool = pPrecoAlcool;
    this._precoGasolina = pPrecoGasolina;

    if (this._consumoAlcool > 0
      && this._consumoGasolina > 0
      && this._precoAlcool > 0
      && this._precoGasolina > 0){
          this._calcular();
    } else{
      this._gastoGasolina = undefined;
      this._gastoAlcool = undefined;
      this._melhor = undefined;
    }


    Object.freeze(this);
  }

  /**
   * Realiza cálculo de gasto em R$/litro e qual combustível é mais vantajoso
   */
  private _calcular() {
    this._gastoGasolina = this._precoGasolina / this._consumoGasolina;
    this._gastoAlcool = this._precoAlcool / this._consumoAlcool;

    this._melhor = this._gastoGasolina === this._gastoAlcool ? 'E': (this._gastoGasolina < this._gastoAlcool ? 'G': 'A');
  }

  /**
   * Getters
   */
  get gastoGasolina() {
    return this._gastoGasolina;
  }
  get gastoAlcool() {
    return this._gastoAlcool;
  }
  get melhor() {
    return this._melhor;
  }

}
