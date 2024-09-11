class Product{
    // title='DEFAULT';
    // imageUrl;
    // description;
    // price;

    constructor(title,image,desc,price){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }

}

class ProductItem{

    constructor(product){
        this.product = product;

    }

    render(){
        const prodEl = document.createElement('li');
        prodEl.className='product-item';
        prodEl.innerHTML = `
        <div>
        <img src="${this.product.imageUrl}" alt ="${this.product.title}"/>
        <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>\$${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Add to cart</button>
        </div>
        </div>
    
        `;
        return prodEl;

    }

}

class ProductList{
    
        products = [
            new Product('BMW m3', 'https://images.unsplash.com/photo-1516610540415-d1b25463c7f3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym13fGVufDB8fDB8fHww','desc',20000.00),
            new Product('BMW x3', 'https://images.unsplash.com/photo-1510903117032-f1596c327647?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJtd3xlbnwwfHwwfHx8MA%3D%3D','desc',40000.00),
            new Product('BMW m4', 'https://images.unsplash.com/photo-1600268330186-76564be81357?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJtd3xlbnwwfHwwfHx8MA%3D%3D','desc',50000.00)
        ]
 

    constructor(){}
    render(){

        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className='product-list';
        for(const prod of this.products){
        const productItem = new ProductItem(prod);
        const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);

    }
    
}


const productList = new ProductList();
productList.render();