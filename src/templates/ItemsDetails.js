import Stars from "./Stars";

function ItemsDetails(props) {
    
    return (
        <div className="col-lg-3 shop-info-grid text-center mt-4">
            <div className="product-shoe-info shoe">
                <div className="men-thumb-item">
                    <img src={props.imageUrl} className="img-fluid" alt="" />
                </div>
                <div className="item-info-product">
                    <h4><a href="single.html">{props.itemName}</a></h4>
                    <div className="product_price">
                        <div className="grid-price">
                            <span className="money"><span className="line">{props.oldPrice}</span> {props.promoPrice}</span>
                        </div>
                    </div>
                    <ul className="stars">
                        <Stars stars={props.stars} />
                    </ul>
                </div>
            </div>
        </div>
    );
  }
  
  export default ItemsDetails;
  