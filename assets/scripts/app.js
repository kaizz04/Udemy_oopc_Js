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

class ElementAttribute{
    constructor(attrName, attrValue){
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component{

    constructor(renderHookId,shouldRender = true){
        this.hookId = renderHookId;
        if(shouldRender){
            this.render();

        }
      

    }

    render(){}

    createRootElement(tag, cssClasses,attributes){
        const rootElement = document.createElement(tag);
        if(cssClasses){
            rootElement.className = cssClasses;

        }
        if(attributes && attributes.length > 0){
            for(const attr of attributes){
                rootElement.setAttribute(attr.name,attr.value);

            }

        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;

    }
}

class ShoppingCart extends Component{
    items = [];

    set cartItems(value){
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;



    }

    get totalAmount(){
        const sum = this.items.reduce((preValue,curItem ) =>  preValue + curItem.price,0);
        return sum;
    }

    constructor(renderHookId){
        super(renderHookId);
    }

    addProduct(product){
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
       
    }

    render(){
        const cartEl=this.createRootElement('section','cart');
        cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now</button>
        `;
        cartEl.className='cart';
        this.totalOutput=cartEl.querySelector('h2');
        return cartEl;
    }

}

class ProductItem extends Component{

    constructor(product, renderHookId){
        super(renderHookId,false);
        this.product = product;
        this.render();

    }
    addToCart(){
        
       App.addProductToCart(this.product);

    }

    render(){
        const prodEl = this.createRootElement('li','product-item');
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

        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click',this.addToCart.bind(this));
     

    }

}

class ProductList extends Component{
    
        products = [];


    constructor(renderHookId){
        super(renderHookId);
        this.fetchProducts(); 
    }

    fetchProducts(){
        this.products = [
            new Product('BMW m3', 'https://images.unsplash.com/photo-1516610540415-d1b25463c7f3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym13fGVufDB8fDB8fHww','desc',20000.00),
            new Product('BMW x3', 'https://images.unsplash.com/photo-1510903117032-f1596c327647?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJtd3xlbnwwfHwwfHx8MA%3D%3D','desc',40000.00),
            new Product('BMW m4', 'https://images.unsplash.com/photo-1600268330186-76564be81357?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJtd3xlbnwwfHwwfHx8MA%3D%3D','desc',50000.00)
        ];
        this.renderProducts();
    }

    renderProducts(){
        for(const prod of this.products){
            new ProductItem(prod,'prod-list');
            }

    }

    render(){
        this.createRootElement('ul','product-list',[new ElementAttribute('id','prod-list')]);
        if(this.products && this.products.length > 0){
            this.renderProducts();
        }
    }
    
}

class Shop {
    constructor(){
        this.render();
    }


    render(){
        this.cart = new ShoppingCart('app');
        const productList = new ProductList('app');

    }

}

class App{
    static cart;


    static init(){
        const shop = new Shop();
        this.cart=shop.cart;
    }

    static addProductToCart(product){
        this.cart.addProduct(product);
    }
}

App.init();