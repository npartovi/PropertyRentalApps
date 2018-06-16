export const fetchAddresses = () => dispatch => (
    $.ajax({
        url: '/api/addresses',
        method: 'GET'
    })
);

export const fetchAddress = (id) => dispatch => (
    $.ajax({
        url: `/api/addresses/${id}`,
        method: 'GET',

    })
);

export const createAddress = (address) => dispatch => (
    $.ajax({
        url: '/api/addresses',
        method: 'POST',
        data: { address }
    })
);

export const updateAddress = (address) => dispatch => (
    $.ajax({
        url: `/api/addresses/${address.id}`,
        method: "PATCH",
        data: { address }
    })
);

export const deleteAddress = (id) => dispatch => (
    $.ajax({
        url: `/api/addresses/${id}`,
        method: 'DELETE'
    })
)