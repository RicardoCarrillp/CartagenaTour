var APP_DATA = {
  "scenes": [
    {
      "id": "0-ctg",
      "name": "ctg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": 2.6970278367052005,
        "pitch": 0.07648543118211215,
        "fov": 1.4075563740628798
      },
      "linkHotspots": [
        {
          "yaw": 3.1133173923634816,
          "pitch": 0.02693926699819471,
          "rotation": 6.283185307179586,
          "target": "1-ctg2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8324005238425398,
          "pitch": -0.11130961765710445,
          "title": "Info demo",
          "text": "Text de info demo xd"
        }
      ]
    },
    {
      "id": "1-ctg2",
      "name": "ctg2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9060444237869199,
          "pitch": 0.0004541313090591359,
          "rotation": 0,
          "target": "0-ctg"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4144556745273196,
          "pitch": -0.19423346492675186,
          "title": "Title info demo2",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Cartagena tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
