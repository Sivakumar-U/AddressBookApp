window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<tr><th>Fullname</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th></th></tr>"
    let innerHtml = `${headerHtml}`
    let addressBookList = createAddressBookJSON();
    for (const contact of addressBookList) {
        innerHtml = `${innerHtml}
    <tr>
    <td>${contact._name}</td>
    <td>${contact._address}</td>
    <td>${contact._city}</td>
    <td>${contact._state}</td>
    <td>${contact._zip}</td>
    <td>${contact._phoneNumber}</td>
    <td>
        <img id="${contact._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
        <img id="${contact._id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
    </td>
 </tr>
    `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

const createAddressBookJSON = () => {
    let addressBookListLocal = [{
            _name: "Siva Reddy",
            _address: "Paravolu",
            _city: "Nellore",
            _state: "Andhra Pradesh",
            _zip: "517520",
            _phoneNumber: "7896541230"

        },
        {
            _name: "Dileep",
            _address: "Nagiri",
            _city: "Tirupati",
            _state: "Andhra Pradesh",
            _zip: "517542",
            _phoneNumber: "8792546130"
        }
    ];
    return addressBookListLocal;
};