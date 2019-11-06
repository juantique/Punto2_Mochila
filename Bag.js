class bag {
    constructor(initialElements, start, howMany) {
        invariant: typeof initialElements === 'Array',
        "Primer Argumento debe ser un Array";
        this.initialElemets.length >= 0,
        'No puede ser null';
        typeof start === 'Integer',
        "Segundo Argumento debe ser un entero";
        typeof howMany === 'Integer',
        "Tercer Argumento debe ser un entero";
        main: if (howMany === undefined)
                howMay = initialElements.length;
        if (start === undefined)
            start = 0;
        this.count = initialElements.length;
        this.elems = initialElements.slice(start, howMany);
    }
    add(x) {
        pre: typeof x === 'Integer';
        main: if (this.count == this.elems.length) {
                var b = new Array(this.elems.length);
                b.fill(0);
                this.elems = this.elems.concat(b);
            }
        this.elems[this.count] = x;
        this.count++;
    }
    removeMin() {
        main: var m = Number.MAX_SAFE_INTEGER;
        var mindex = 0;
        for (var i = 0; i < this.count; i++) {
            if (this.elems[i] < m) {
                mindex = i;
                m = this.elems[i];
            }
        }
        this.count--;
        this.elems[mindex] = this.elems[this.count];
        return m;
        post: __result < Number.MAX_SAFE_INTEGER;
    }
    getCount() {
        main: return this.count;
        post: __result > 0;
    }
    getElements {
        main: return this.elems;
        post: Array.isArray(__result);
        __result.length > 0;
    }
}



//invariantes clase
//precondiciones all methods
//postcondiciones method add