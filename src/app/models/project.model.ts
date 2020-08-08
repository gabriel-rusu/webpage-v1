export class Project {
    private _name: string;
    html_url: string;
    description: string;

    get name() {
        if (this._name.includes("-"))
            this.name = this._name;
        return this._name;
    }

    set name(name) {
        let words = name.split('-');
        console.log(words);
        this._name = words.join(' ');
    }
}