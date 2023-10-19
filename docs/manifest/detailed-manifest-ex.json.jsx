{
  "active_manifest": "contentauth:urn:uuid:5a08e472-974c-422e-b38a-d6c7326481a5",
  "manifests": {
    "contentauth:urn:uuid:5a08e472-974c-422e-b38a-d6c7326481a5": {
      "claim": {
        "alg": "sha256",
        "assertions": [
          {
            "hash": "BzyThXbTh88KAa5Wb8ckQHMH+Z+noRAUxuv0OmhSQes=",
            "url": "self#jumbf=c2pa.assertions/c2pa.thumbnail.claim.jpeg"
          },
          {
            "hash": "lEORvVMPdP8FK5rTLk0zF0SttylTbG5r/6t4Svx0lXA=",
            "url": "self#jumbf=c2pa.assertions/stds.schema-org.CreativeWork"
          },
          {
            "hash": "42l0mSt4ue0hIk5YSZ3Q8cwcotNphWsScwvDyq+qyP8=",
            "url": "self#jumbf=c2pa.assertions/c2pa.actions"
          },
          {
            "hash": "PMfHnzmyMA2CWqP4rdBd6GrORasLnYmtnFkpAnaIs94=",
            "url": "self#jumbf=c2pa.assertions/c2pa.hash.data"
          }
        ],
        "claim_generator": "make_test_images/0.12.0 c2pa-rs/0.12.0",
        "claim_generator_info": null,
        "dc:format": "image/jpeg",
        "dc:title": "C.jpg",
        "instanceID": "xmp:iid:e928fac1-8473-4c70-8219-369e91d4e58d",
        "signature": "self#jumbf=c2pa.signature"
      },
      "assertion_store": {
        "c2pa.thumbnail.claim.jpeg": "<omitted> len = 31659",
        "c2pa.actions": {
          "actions": [
            {
              "action": "c2pa.created"
            },
            {
              "action": "c2pa.drawing",
              "parameters": {
                "name": "gradient"
              }
            }
          ]
        },
        "c2pa.hash.data": {
          "alg": "sha256",
          "exclusions": [
            {
              "length": 51179,
              "start": 20
            }
          ],
          "hash": "DcGR4k9M6aLXXCeDii4tSdX45rrIM5HSr1Wy/czQ6ro=",
          "name": "jumbf manifest",
          "pad": "<omitted>"
        },
        "stds.schema-org.CreativeWork": {
          "@context": "http://schema.org/",
          "@type": "CreativeWork",
          "author": [
            {
              "@type": "Person",
              "name": "Gavin Peacock"
            }
          ]
        }
      },
      "signature": {
        "alg": "ps256",
        "issuer": "C2PA Test Signing Cert",
        "time": "2022-08-19T19:03:41+00:00"
      }
    }
  },
  "validation_status": [
    {
      "code": "claimSignature.validated",
      "url": "self#jumbf=/c2pa/contentauth:urn:uuid:5a08e472-974c-422e-b38a-d6c7326481a5/c2pa.signature",
      "explanation": "claim signature valid"
    },
    {
      "code": "assertion.hashedURI.match",
      "url": "self#jumbf=c2pa.assertions/c2pa.thumbnail.claim.jpeg",
      "explanation": "hashed uri matched: self#jumbf=c2pa.assertions/c2pa.thumbnail.claim.jpeg"
    },
    {
      "code": "assertion.hashedURI.match",
      "url": "self#jumbf=c2pa.assertions/stds.schema-org.CreativeWork",
      "explanation": "hashed uri matched: self#jumbf=c2pa.assertions/stds.schema-org.CreativeWork"
    },
    {
      "code": "assertion.hashedURI.match",
      "url": "self#jumbf=c2pa.assertions/c2pa.actions",
      "explanation": "hashed uri matched: self#jumbf=c2pa.assertions/c2pa.actions"
    },
    {
      "code": "assertion.hashedURI.match",
      "url": "self#jumbf=c2pa.assertions/c2pa.hash.data",
      "explanation": "hashed uri matched: self#jumbf=c2pa.assertions/c2pa.hash.data"
    },
    {
      "code": "assertion.dataHash.match",
      "url": "self#jumbf=/c2pa/contentauth:urn:uuid:5a08e472-974c-422e-b38a-d6c7326481a5/c2pa.assertions/c2pa.hash.data",
      "explanation": "data hash valid"
    }
  ]
}
