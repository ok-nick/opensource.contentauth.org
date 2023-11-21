---
id: iptc-properties
title: IPTC properties
---

Data Types 

- Text = sequence of characters, can be used for free text or other purposes
- Integer = integer number 
- Decimal = decimal number
- URL = Uniform Resource Locator, in most cases the web address of a resource
- URI = Uniform Resource Identifier for identifying a resource, this includes URLs
-  `...Structure` = a structure of sub-properties 

Cardinality

How often this property must or may occur in a set of Photo Metadata about an image or in a structure of a metadata property:

- 0..1 = one occurrence is optional
- 0..unbounded = one and multiple occurrences are optional



| IPTC Property | Data Type | XMP property |
|-----|------|----------|
|  Alt Text (Accessibility) | Text / Cardinality: 0..1 | Iptc4xmpCore:AltTextAccessibility  
|  Copyright Notice |  Text / Cardinality: 0..1 |  dc:rights  
|  Creator |  Text / Cardinality: 0..unbounded |  dc:creator  
|  Creator's Contact info |  Creators Contact Info structure / Cardinality: 0..1 |  Iptc4xmpCore:CreatorContactInfo 
|  Creator's Jobtitle |  Text / Cardinality: 0..1 |  photoshop:AuthorsPosition  
|  Credit Line |  Text / Cardinality: 0..1 |  photoshop:Credit  
|  Date Created |  DateTime (preferred: truncated DateTime) / Cardinality: 0..1 |  photoshop:DateCreated
|  Caption/Description |  Text / Cardinality: 0..1 |  dc:description  
|  Caption/Description writer |  Text / Cardinality: 0..1 |  photoshop:CaptionWriter  
|  Extended Description (Accessibility) |  Text / Cardinality: 0..1 |  Iptc4xmpCore:ExtDescrAccessibility  
|  Headline |  Text / Cardinality: 0..1 |  photoshop:Headline  
|  Instructions |  Text / Cardinality: 0..1 |  photoshop:Instructions  
|  Job Identifier |  Text / Cardinality: 0..1 |  photoshop:TransmissionReference  
|  Keywords |  Text / Cardinality: 0..unbounded |  dc:subject  
|  Rights Usage Terms |  Text / Cardinality: 0..1 |  xmpRights:UsageTerms  
|  IPTC Scene Code |  CV-code / Cardinality: 0..unbounded; [Six-digit IPTC Scene NewsCode](http://cv.iptc.org/newscodes/scene/) | `Iptc4xmpCore:Scene`
|  Title |  Text / Cardinality: 0..1 |  dc:title  |
|  Additional model info |  Text / Cardinality: 0..1 |  Iptc4xmpExt:AddlModelInfo  
|  Artwork or object in the image |  [Artwork or Object in the Image structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#artwork-or-object-in-the-image-structure) / Cardinality: 0..unbounded |  Iptc4xmpExt:ArtworkOrObject 
|  Code of featured organization |  CV-code / Cardinality: 0..unbounded |  Iptc4xmpExt:OrganisationInImageCode  
|  Contributor |  [Entity or Concept with role structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#entity-or-concept-with-role-structure) / Cardinality: (0..unbounded) |  Iptc4xmpExt:Contributor  
|  Copyright owner |  plus-CopyrightOwner / Cardinality: 0..3 |  plus:CopyrightOwner 
|  CV-Term About Image |  [CV-Term structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#cv-term-structure) / Cardinality: 0..unbounded |  Iptc4xmpExt:AboutCvTerm  
|  Data Mining |  CV-Code / Cardinality: 0..1 |  plus:DataMining 
|  Other constraints |  Text / Cardinality: 0..1 |  plus:OtherConstraints  
|  Digital Image Identifier |  Text / Cardinality: 0..1 |  Iptc4xmpExt:DigImageGUID  
|  Type of source for this photo |  CV-code / Cardinality: 0..1 , [Digital Source Type NewsCodes](http://cv.iptc.org/newscodes/digitalsourcetype/) | `Iptc4xmpExt:DigitalSourceType`
|  Embedded Encoded Rights Expression |  [Embedded Encoded Rights Expression (EERE) structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#embedded-encoded-rights-expression-eere-structure) / Cardinality: 0..unbounded |  Iptc4xmpExt:EmbdEncRightsExpr 
|  Event ID |  URI / Cardinality: 0..unbounded |  Iptc4xmpExt:EventId 
|  Event Name |  Text / Cardinality: 0..1 |  Iptc4xmpExt:Event  
|  Genre |  [CV-Term structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#cv-term-structure) / Cardinality: 0..unbounded |  Iptc4xmpExt:Genre  
|  Image Creator |  plus-ImageCreator / Cardinality: 0..3 |  plus:ImageCreator  
|  Rating |  Decimal / Cardinality: 0..1 |  xmp:Rating  
|  Image Region(s) |  [Image Region structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#image-region-structure) / Cardinality: 0..unbounded |  Iptc4xmpExt:ImageRegion  
|  Registry Entry |  [Registry Entry structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#registry-entry-structure) / Cardinality: 0..unbounded |  Iptc4xmpExt:RegistryId  
|  Image Supplier |  plus-ImageSupplier / Cardinality: 0..1 |  plus:ImageSupplier 
|  Image Supplier Image Id |  Text / Cardinality: 0..1 |  plus:ImageSupplierImageID  
|  Licensor |  plus-Licensor / Cardinality: 0..3 |  plus:Licensor 
|  Linked Encoded Rights Expression |  [Linked Encoded Rights Expression (LERE) structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#linked-encoded-rights-expression-lere-structure) / Cardinality: 0..unbounded |  Iptc4xmpExt:LinkedEncRightsExpr 
|  Location Created |  [Location structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#location-structure) / Cardinality: 0..1 |  Iptc4xmpExt:LocationCreated 
|  Location shown |  [Location structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#location-structure) / Cardinality: 0..unbounded |  Iptc4xmpExt:LocationShown 
|  Maximum available height |  Integer / Cardinality: 0..1 |  Iptc4xmpExt:MaxAvailHeight  
|  Maximum available width |  Integer / Cardinality: 0..1 |  Iptc4xmpExt:MaxAvailWidth  
|  Minor Model Age Disclosure |  CV-code / Cardinality: 0..1 | `plus:MinorModelAgeDisclosure` 
|  Model age |  Integer / Cardinality: 0..unbounded |  Iptc4xmpExt:ModelAge  
|  Model Release Id |  Text / Cardinality: 0..unbounded |  plus:ModelReleaseID  
|  Model Release Status |  CV-code / Cardinality: 0..1 | `plus:ModelReleaseStatus`
|  Name of featured Organisation |  Text / Cardinality: 0..unbounded | Iptc4xmpExt:OrganisationInImageName  
|  Person shown |  Text / Cardinality: 0..unbounded |  Iptc4xmpExt:PersonInImage  
|  Person Shown (Details) |  [Person structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#person-structure) / Cardinality: 0..unbounded |  Iptc4xmpExt:PersonInImageWDetails  
|  Product Shown |  [Product structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#product-structure) / Cardinality: 0..unbounded |  Iptc4xmpExt:ProductInImage 
|  Property Release Id |  Text / Cardinality: 0..unbounded |  plus:PropertyReleaseID  
|  Property Release Status |  CV-code / Cardinality: 0..1 | `plus:PropertyReleaseStatus`
|  Copyright Info URL |  Text / Cardinality: 0..1 |  xmpRights:WebStatement  

