/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3333292991")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select256178333",
    "maxSelect": 1,
    "name": "humeur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "😁Heureux",
      "Déçu",
      "Anxieux",
      "Peureux",
      "Triste"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3333292991")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select256178333",
    "maxSelect": 1,
    "name": "humeur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Heureux",
      "Déçu",
      "Anxieux",
      "Peureux",
      "Triste"
    ]
  }))

  return app.save(collection)
})
