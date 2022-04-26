import CategorieBanner from "../templates/CategorieBanner"

function Shop() {
    return (
      <>
      {/* <!--/banner-bottom --> */}
    <section className="banner-bottom">
        <div className="container">
            <h4 className="title-wthree text-center">Catégories</h4>
            {/* <!--/row--> */}
            <div className="row shop-wthree-info text-center">
                <CategorieBanner itemName="Messenger Bag" imageUrl="images/b1.jpg" oldPrice="$799" promoPrice="$675.00" stars={0} />
                <CategorieBanner itemName="Shoulder Bag (Pink)" imageUrl="images/b2.jpg" oldPrice="$799" promoPrice="$675.00" stars={3} />
                <CategorieBanner itemName="Sling Bag" imageUrl="images/b3.jpg" oldPrice="$599" promoPrice="$475.00" stars={5} />
                <CategorieBanner itemName="Tote (Blue)" imageUrl="images/b4.jpg" oldPrice="$799" promoPrice="$675.00" stars={2.5} />
            </div>
            {/* <!--/row1--> */}
            <div className="row shop-wthree-info text-center">
                <CategorieBanner itemName="Satchel (Yellow)" imageUrl="images/b5.jpg" oldPrice="$999" promoPrice="$875.00" stars={3.1} />
                <CategorieBanner itemName="Shoulder Bag (Orange)" imageUrl="images/b6.jpg" oldPrice="$799" promoPrice="$675.00" stars={5} />
                <CategorieBanner itemName="Hobo (Blue)" imageUrl="images/b8.jpg" oldPrice="$799" promoPrice="$675.00" stars={1} />
                <CategorieBanner itemName="Satchel (Pink)" imageUrl="images/b7.jpg" oldPrice="$599" promoPrice="$475.00" stars={1.3} />
            </div>
            {/* <!--/row--> */}
            <div className="row shop-wthree-info text-center mb-5">
                <CategorieBanner itemName="Sling Bag" imageUrl="images/b3.jpg" oldPrice="$599" promoPrice="$475.00" stars={4.1} />
                <CategorieBanner itemName="Tote (Blue)" imageUrl="images/b4.jpg" oldPrice="$799" promoPrice="$675.00" stars={0.3} />
                <CategorieBanner itemName="Messenger Bag" imageUrl="images/b1.jpg" oldPrice="$799" promoPrice="$675.00" stars={1.5} />
                <CategorieBanner itemName="Shoulder Bag (Pink)" imageUrl="images/b2.jpg" oldPrice="$799" promoPrice="$675.00" stars={3.4} />
            </div>
        </div>
    </section>
    {/* banner-bottom */}
      </>
    );
  }
  
  export default Shop;