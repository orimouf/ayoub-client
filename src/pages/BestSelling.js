import ItemsDetails from '../templates/ItemsDetails';

function BestSelling() {
    return (
      <>
      {/* <!--/banner-bottom --> */}
    <section className="banner-bottom media-bottom">
        <div className="container">
            <h4 className="title-wthree text-center">Les meilleures ventes</h4>
            {/* <!--/row--> */}
            <div className="row shop-wthree-info text-center">
                <ItemsDetails itemName="Messenger Bag" imageUrl="images/b1.jpg" oldPrice="$799" promoPrice="$675.00" stars={0} />
                <ItemsDetails itemName="Shoulder Bag (Pink)" imageUrl="images/b2.jpg" oldPrice="$799" promoPrice="$675.00" stars={3} />
                <ItemsDetails itemName="Sling Bag" imageUrl="images/b3.jpg" oldPrice="$599" promoPrice="$475.00" stars={5} />
                <ItemsDetails itemName="Tote (Blue)" imageUrl="images/b4.jpg" oldPrice="$799" promoPrice="$675.00" stars={2.5} />
            </div>
            {/* <!--/row1--> */}
            <div className="row shop-wthree-info text-center">
                <ItemsDetails itemName="Satchel (Yellow)" imageUrl="images/b5.jpg" oldPrice="$999" promoPrice="$875.00" stars={3.1} />
                <ItemsDetails itemName="Shoulder Bag (Orange)" imageUrl="images/b6.jpg" oldPrice="$799" promoPrice="$675.00" stars={5} />
                <ItemsDetails itemName="Hobo (Blue)" imageUrl="images/b8.jpg" oldPrice="$799" promoPrice="$675.00" stars={1} />
                <ItemsDetails itemName="Satchel (Pink)" imageUrl="images/b7.jpg" oldPrice="$599" promoPrice="$475.00" stars={1.3} />
            </div>
            {/* <!--/row--> */}
            <div className="row shop-wthree-info text-center mb-5">
                <ItemsDetails itemName="Sling Bag" imageUrl="images/b3.jpg" oldPrice="$599" promoPrice="$475.00" stars={4.1} />
                <ItemsDetails itemName="Tote (Blue)" imageUrl="images/b4.jpg" oldPrice="$799" promoPrice="$675.00" stars={0.3} />
                <ItemsDetails itemName="Messenger Bag" imageUrl="images/b1.jpg" oldPrice="$799" promoPrice="$675.00" stars={1.5} />
                <ItemsDetails itemName="Shoulder Bag (Pink)" imageUrl="images/b2.jpg" oldPrice="$799" promoPrice="$675.00" stars={3.4} />
            </div>
            <nav aria-label="Page navigation example mt-5">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#">Previous</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
    {/* banner-bottom */}
      </>
    );
  }
  
  export default BestSelling;