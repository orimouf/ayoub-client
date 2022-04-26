import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faShippingFast, faGift } from '@fortawesome/free-solid-svg-icons'

function App() {
    return (
      <>
        {/* shipping */}
        <section className="shipping-wthree">
            <div className="shiopping-grids d-lg-flex">
                <div className="col-lg-4 shiopping-w3pvt-gd text-center">
                    <div className="icon-gd"><span aria-hidden="true"><FontAwesomeIcon icon={faShippingFast} /></span>
                    </div>
                    <div className="icon-gd-info">
                        <h3>FAST SHIPPING</h3>
                        <p>On all order over $2000</p>
                    </div>
                </div>
                <div className="col-lg-4 shiopping-w3pvt-gd sec text-center">
                    <div className="icon-gd"><span aria-hidden="true"><FontAwesomeIcon icon={faBullhorn} /></span></div>
                    <div className="icon-gd-info">
                        <h3>FREE RETURN</h3>
                        <p>On 1st exchange in 30 days</p>
                    </div>
                </div>
                <div className="col-lg-4 shiopping-w3pvt-gd text-center">
                    <div className="icon-gd"> <span aria-hidden="true"><FontAwesomeIcon icon={faGift} /></span></div>
                    <div className="icon-gd-info">
                        <h3>MEMBER DISCOUNT</h3>
                        <p>Register &amp; save up to $29%</p>
                    </div>

                </div>
            </div>

        </section>
        {/* shipping */}
      </>
    );
}
  
export default App;
  