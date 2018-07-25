@damages.each do |damage|
    json.set! damage.id do 
        json.partial! 'api/damages/damage', damage: damage
    end
end