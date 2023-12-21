import AddToCart from "../moddle/AddToCart.js"
import Product from "../moddle/Product.js"

class ProductController {

    //    📝  create
 static createProductItem =async(req,res)=>{
   

    const { title, desc, img_url,price,rating, category} = req.body
    console.log("body data..", title, desc, img_url,price,rating, category)
    if (title && category) {
        try {
       
        let titleInDb = await Product.findOne({ title })
        if (titleInDb) {
            res.status(400).json({ "msg": "Already exists!" })
        } else {
            const ProductItemData = new Product({
                title, desc, img_url,price,rating, category
            })
            const saveData = await ProductItemData.save()
            if (saveData) {
                res.status(200).json({ "msg": "Created  successfully." })
            } else {
                res.status(400).json({ "msg": "Not created successfully." })

            }
        }

    } catch (error) {
        console.log("error  internal",error)
        res.status(500).json({ "msg": "Internal server occured." })
            
    }
    } else {
        res.status(400).json({ "msg": "title and category  is required!" })
    }
 
 

 }
 static addToCart =async(req,res)=>{

    // const { id, userId, variant,price, quantity} = req.body
    //   const userId = 'user_id'; // Replace with actual user ID
    console.log("req", req.body)
    try {
      const { userId, products: [{productId, quantity,productName,price,variant }]  } = req.body;
    //   console.log("productId, quantity,productName,price,variant",req.body.products.productId, quantity,productName,price,variant)
      if(productId && quantity && productName && price && variant){
        let cart = await AddToCart.findOne({ userId });

        if (cart) {
          const existingProductIndex = cart.products.findIndex(p => p.productId === productId);
        //   const existingProductIndex = cart.products.findIndex(p => p.productId === Number(productId));
    console.log("existingProductIndex", existingProductIndex)
          if (existingProductIndex > -1) {
            cart.products[existingProductIndex].quantity += Number(quantity);
          } else {
            cart.products.push({ productId, quantity,productName,price,variant});
          }
          await cart.save();
        } else {
          // Create a new cart
          const newCart = new AddToCart({ userId, products: [{ productId, quantity,productName,price,variant }] });
          await newCart.save();
          cart = newCart;
        }
    
        res.json(cart);
      }else{
        res.status(400).json({ "msg": "ALL field are required!" })
      }
   
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error adding item to cart' });
  }

 }
}
export default ProductController



