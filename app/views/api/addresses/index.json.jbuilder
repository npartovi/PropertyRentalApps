@addresses.each do |address|
    json.set! address.id do 
        json.partial! 'api/addresses/address', address: address
    end
end