export const fetchAddresses = () =>  (
    $.ajax({
        url: '/api/addresses',
        method: 'GET'
    })
);

export const fetchAddress = (id) =>  (
    $.ajax({
        url: `/api/addresses/${id}`,
        method: 'GET',

    })
);

export const createAddress = (address) =>  (
    $.ajax({
        url: '/api/addresses',
        method: 'POST',
        data: { address }
    })
);

export const updateAddress = (address) => (
    $.ajax({
        url: `/api/addresses/${address.id}`,
        method: "PATCH",
        data: { address }
    })
);

export const deleteAddress = (id) => (
    $.ajax({
        url: `/api/addresses/${id}`,
        method: 'DELETE'
    })
)