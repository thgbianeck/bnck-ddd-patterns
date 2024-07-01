export default class OrderItem {
    _id: string;
    _productId: string;
    _name: string;
    _price: number;
    _quantity: number;
    _total: number;

    constructor(
        id: string,
        name: string,
        price: number,
        productId: string,
        quantity: number
      ) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._productId = productId;
        this._quantity = quantity;
        this._total = this.total();
      }
    
      get id(): string {
        return this._id;
      }
    
      get name(): string {
        return this._name;
      }
    
      get productId(): string {
        return this._productId;
      }
    
      get quantity(): number {
        return this._quantity;
      }
    
      get price(): number {
        return this._price;
      }
    
      total(): number {
        return this._price * this._quantity
      }
}