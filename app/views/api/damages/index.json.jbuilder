@damages.each do |damage|
    json.set! damage.id do 
        json.partial! 'api/damages/damage', damage: damage
        json.photoUrl url_for(damage.photo)
    end
end