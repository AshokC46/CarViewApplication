function Main() {
  const suvCars = [
    {
      name: "Mahindra Thar",
      price: "₹ 11.50 - 17.60 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/10745/1697697308167/front-left-side-47.jpg?tr=w-300",
    },
    {
      name: "Tata Punch",
      price: "₹ 6 - 10.32 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/10681/1691392713058/front-left-side-47.jpg?tr=w-300",
    },
    {
      name: "Hyundai Creta",
      price: "₹ 11.11 - 20.42 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1705465218824/front-left-side-47.jpg?tr=w-300",
    },
    {
      name: "Tata Nexon",
      price: "₹ 8 - 15.60 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/11103/1736494813808/front-left-side-47.jpg?tr=w-300",
    },
  ];
  const electricCars = [
    {
      name: "Mahindra BE 6",
      price: "₹ 18.90 - 26.90 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/BE-6/9263/1738382953778/front-left-side-47.jpg?tr=w-300",
    },

    {
      name: "Hyundai Creta Electric",
      price: "₹ 17.99 - 24.38 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta-Electric/11523/1738068021618/front-left-side-47.jpg?tr=w-300",
    },
    {
      name: "Mahindra XEV 9e",
      price: "₹ 21.90 - 30.50 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra-XEV/9e/9262/1732688872801/front-left-side-47.jpg?tr=w-300",
    },
    {
      name: "MG Windsor EV",
      price: "₹ 14 - 16 Lakh*",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Windsor-EV/11848/1726050481737/front-left-side-47.jpg?tr=w-300",
    },
  ];
  const upcomingCars = [
    {
      name: "Audi RS Q8 2025",
      price: "₹ 2.30 Cr (Estimated Price)",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/RS-Q8-2025/12377/1738054937653/front-left-side-47.jpg?tr=w-300",
    },
    {
      name: "MG Majestor",
      price: "₹ 46 Lakh (Estimated Price)",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Majestor/12370/1737206408710/front-left-side-47.jpg?tr=w-300",
    },
    {
      name: "Volvo XC90 2025",
      price: "₹ 1.05 Cr (Estimated Price)",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volvo/XC90-2025/11977/1725537655549/front-left-side-47.jpg?tr=w-300",
    },
    {
      name: "Audi Q6 e-tron",
      price: "₹ 1.05 Cr (Estimated Price)",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Q6-e-tron/11608/1710995400792/front-left-side-47.jpg?tr=w-300",
    },
  ];
  return (
    <>

      <div class="container">
        <h4>Most Searched Cars</h4>
        <div class="row">
          {suvCars.map((copyofsuvCars) => {
            const { name, price, image } = copyofsuvCars;
            return (
              <div class="col-3">
                <div class="card">
                  <img src={image} />
                  <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{price}</p>
                    <a href="#" class="btn btn-primary">
                      Check Complete Offers
                    </a>
                  </div>
                </div>
              </div>
              
            );
          })}
        </div>
      </div>
      
      <div class="container">
        <h4>Electric Cars</h4>
        <div class="row">
          {electricCars.map((copyofelectricCars) => {
            const { name, price, image } = copyofelectricCars;
            return (
              <div class="col-3">
                <div class="card">
                  <img src={image} />
                  <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{price}</p>
                    <a href="#" class="btn btn-primary">
                      Check Complete Offers
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div class="container">
        <h4>Upcoming Cars</h4>
        <div class="row">
          {upcomingCars.map((copyofupcomingCars) => {
            const { name, price, image } = copyofupcomingCars;
            return (
              <>
                <div class="col-3">
                  <div class="card">
                    <img src={image} />
                    <div class="card-body">
                      <h5 class="card-title">{name}</h5>
                      <p class="card-text">{price}</p>
                      <a href="#" class="btn btn-primary">
                        Check Complete Offers
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      
    </>
  );
}

export default Main;
