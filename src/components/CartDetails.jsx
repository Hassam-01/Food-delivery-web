function CartDetails({ namePH, CardContact, AddressExpiry, CCPlace, AEPlace }) {
  return (
    <div>
      <div className="flex flex-col space-y-3 mt-4">
        <div className="flex flex-col space-y-1 ">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder={namePH}
            id="name"
            className="focus:ring-2 focus:ring-[#FC8A06] placeholder:text-sm focus:outline-none text-gray-700 px-3 py-2 rounded-xl"
          />
        </div>
        <div className="flex flex-col space-y-1 ">
          <label htmlFor="contact">{CardContact}</label>
          <input
            type="text"
            id="contact"
            className="focus:ring-2 focus:ring-[#FC8A06] placeholder:text-sm focus:outline-none text-gray-700 px-3 py-2 rounded-xl"
            placeholder={CCPlace}
          />
        </div>
        <div className=" ">
          {AddressExpiry === "Address" ? (
            <div className="flex flex-col space-y-1">
              <label htmlFor="address">{AddressExpiry}</label>
              <input
                type="text"
                id="address"
                className="focus:ring-2 focus:ring-[#FC8A06] placeholder:text-sm focus:outline-none text-gray-700 px-3 py-2 rounded-xl"
                placeholder={AEPlace}
              />
            </div>
          ) : (
            <div className="flex gap-4">
              <div className="flex flex-col space-y-1 flex-1">
                <label htmlFor="address">{AddressExpiry}</label>
                <input
                  type="text"
                  id="address"
                  className="focus:ring-2 w-full focus:ring-[#FC8A06] placeholder:text-sm focus:outline-none text-gray-700 px-3 py-2 rounded-xl"
                  placeholder={AEPlace}
                />
              </div>
              <div className="flex flex-col space-y-1 flex-1">
                <label htmlFor="CVV">CVV</label>
                <input
                  type="text"
                  id="CVV"
                  className="focus:ring-2 w-full focus:ring-[#FC8A06] placeholder:text-sm focus:outline-none text-gray-700 px-3 py-2 rounded-xl"
                  placeholder="123"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartDetails;
