class Product{
    title='DEFAULT';
    imageUrl;
    description;
    price;

    constructor(title,image,desc,price){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }

}

const productList = {
    products:[
        new Product('BMW m3', 'https://images.unsplash.com/photo-1516610540415-d1b25463c7f3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym13fGVufDB8fDB8fHww','desc',20000.00),
        new Product('BMW x3', 'https://images.unsplash.com/photo-1510903117032-f1596c327647?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJtd3xlbnwwfHwwfHx8MA%3D%3D','desc',40000.00),
        new Product('BMW m4', 'https://images.unsplash.com/photo-1600268330186-76564be81357?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJtd3xlbnwwfHwwfHx8MA%3D%3D','desc',50000.00)
    ],
    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className='product-list';
        for(const prod of this.products){
            const prodEl = document.createElement('li');
            prodEl.className='product-item';
            prodEl.innerHTML = `
            <div>
            <img src="${prod.imageUrl}" alt ="${prod.title}"/>
            <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to cart</button>
            </div>
            </div>
        
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();