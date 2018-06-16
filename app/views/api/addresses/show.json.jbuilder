json.set! :address do 
    json.partial! 'api/addresses/address', address: @address
end