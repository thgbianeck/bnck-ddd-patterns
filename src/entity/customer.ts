import Address from "./address";

export default class Customer {

    private _id: string;
    private _name: string = '';
    private _address!: Address;
    private _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    get id() { 
        return this._id; 
    }

    get name() { 
        return this._name; 
    }

    get Address() { 
        return this._address; 
    }

    set Address(address: Address) {
        this._address = address;
    }

    validate() {
        if (this._id.length === 0) {
          throw new Error("Id is required");
        }
        if (this._name.length === 0) {
          throw new Error("Name is required");
        }
      }

    changeName(name: string): void {    
        this._name = name;
        this.validate();
    }

    isActive(): boolean {
        return this._active;
    }

    activate(): void {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer");
          }
        this._active = true;
    }

    deactivate(): void {
        this._active = false;
    }

}