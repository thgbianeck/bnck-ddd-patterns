class Customer {

    _id: string;
    _name: string = '';
    _address: string = '';
    _active: boolean = false;

    constructor(id: string, name: string, address: string) {
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