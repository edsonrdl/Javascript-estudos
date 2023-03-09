import {Pessoa} from '../models/Pessoa'

export class PessoaController{
    _inputNome;
    _inputIdade;
    _inputPeso;
    _inputAltura;
    constructor(){
        this._inputNome = document.querySelector('#nome');
        this._inputIdade = document.querySelector('#idade');
        this._inputPeso = document.querySelector('#Peso');
        this._inputAltura = document.querySelector('#Altura');
    }
}