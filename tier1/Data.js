const internalData = {
    "term": [
        "quantity",
        "constituent"
    ],
    "quantity": [
        "amount",
        "concept"
    ],
    "constituent": [
        "syntagma",
        "voter"
    ],
    "amount": [
        "magnitude"
    ],
    "artificial_intelligence": [
        "computer_science"
    ],
    "science": [
        "subject",
        "method_to_understand_world",
        "discipline"
    ],
    "syntagma": [
        "string_of_words"
    ],
    "concept": [
        "idea"
    ],
    "voter": [
        "citizen"
    ],
    "asteroid": [
        "celestial_body"
    ],
    "celestial_body": [
        "natural_object"
    ],
    "natural_object": [
        "whole"
    ],
    "whole": [],
    "string_of_words": [
        "language",
        "string"
    ],
    "magnitude": [
        "importance",
        "property"
    ],
    "idea": [
        "central_meaning_purpose_or_concept",
        "opinion",
        "content"
    ],
    "citizen": [
        "national"
    ],
    "language": [],
    "string": [
        "series"
    ],
    "central_meaning_purpose_or_concept": [],
    "importance": [
        "value",
        "standing"
    ],
    "opinion": [
        "message"
    ],
    "property": [
        "object",
        "concept"
    ],
    "series": [
        "polynomial"
    ],
    "standing": [
        "motion"
    ],
    "content": [
        "proportion",
        "cognition"
    ],
    "rocket": [
        "machine",
        "visual_signal",
        "vehicle"
    ],
    "visual_signal": [
        "signal"
    ],
    "machine": [],
    "vehicle": [
        "substance",
        "medium"
    ],
    "signal": [
        "communication",
        "incitement"
    ],
    "medium": [
        "transmission",
        "substance",
        "environment"
    ],
    "substance": [],
    "incitement": [
        "psychic_energy"
    ],
    "communication": [
        "act"
    ],
    "psychic_energy": [
        "motivation"
    ],
    "transmission": [
        "sending",
        "communication"
    ],
    "environment": [
        "situation",
        "geographical_area"
    ],
    "motivation": [
        "psychological_feature",
        "act"
    ],
    "sending": [
        "causing",
        "directed_movement",
        "loss_of_user_rights"
    ],
    "psychological_feature": [
        "abstraction"
    ],
    "directed_movement": [
        "moving",
        "controlling_event"
    ],
    "act": [],
    "loss_of_user_rights": [
        "issuing",
        "change_in_user_rights"
    ],
    "saturn": [
        "planet",
        "american_car",
        "car"
    ],
    "american_car": [
        "car",
        "gas_driven_automobile"
    ],
    "planet": [
        "large_object",
        "celestial_body"
    ],
    "large_object": [],
    "gas_driven_automobile": [
        "gas_powered_road_vehicle",
        "car"
    ],
    "car": [
        "vehicle",
        "motor_vehicle"
    ],
    "gas_powered_road_vehicle": [],
    "motor_vehicle": [
        "self_propelled_vehicle",
        "land_vehicle"
    ],
    "self_propelled_vehicle": [
        "wheeled_vehicle"
    ],
    "land_vehicle": [
        "self_powered_vehicle",
        "land_transportation_device"
    ],
    "self_powered_vehicle": [
        "user_guided_device",
        "transportation_device",
        "self_powered_device",
        "consumer_durable"
    ],
    "wheeled_vehicle": [
        "container",
        "vehicle",
        "land_transportation_device"
    ],
    "land_transportation_device": [
        "hexalateral_object",
        "terrestrial_functioning_object",
        "transportation_device",
        "consumer_durable"
    ],
    "geographical_area": [
        "region"
    ],
    "situation": [],
    "causing": [
        "act",
        "action"
    ],
    "abstraction": [
        "concept",
        "painting",
        "entity"
    ],
    "controlling_event": [],
    "change_in_user_rights": [
        "change_of_property_holdings",
        "human_activity"
    ],
    "issuing": [
        "writing",
        "transfer"
    ],
    "moving": [],
    "region": [
        "indefinite_quantity",
        "location"
    ],
    "action": [],
    "painting": [
        "fine_arts",
        "trade"
    ],
    "value": [],
    "message": [],
    "national": [
        "person"
    ],
    "motion": [],
    "object": [
        "thing",
        "computer_science"
    ],
    "polynomial": [
        "mapping"
    ],
    "proportion": [
        "magnitude_relation"
    ],
    "cognition": [
        "psychological_feature"
    ],
    "thing": [
        "situation"
    ],
    "magnitude_relation": [
        "relation",
        "relationship"
    ],
    "computer_science": [
        "science"
    ],
    "black": [
        "color"
    ],
    "color": [
        "timbre",
        "visual_property"
    ],
    "visual_property": [
        "property"
    ],
    "timbre": [
        "sound_property"
    ],
    "sound_property": [
        "property"
    ],
    "method_to_understand_world": [],
    "discipline": [],
    "subject": [],
    "mapping": [
        "mathematical_relation",
        "procedure"
    ],
    "person": []
};

module.exports = class Data {
    
    getTerm(term) {
        return internalData[term] ? internalData[term] : null;
    }
};
