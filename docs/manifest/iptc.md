---
id: iptc-properties
title: IPTC photo metadata properties
hide_table_of_contents: true
---

:::note
This summary of IPTC properties based on the [IPTC Photo Metadata Standard](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata) is provided for convenience. In case of discrepancies or lack of detail, refer to the specification.
::: 

The table below:
- Summarizes both [IPTC core metadata properties](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#metadata-properties) and [IPTC extension properties](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#metadata-properties-2).
- Does not include "legacy" core properties, since they are superseded by IPTC extension properties.
- Does not include properties from the [IPTC Video Metadata Hub Specification](https://www.iptc.org/std/videometadatahub/userguide/#property-reference-table).

### Data types

Some properties have non-primitive types, referred to in the IPTC specification as "structures."  These structures can be expressed in JSON as objects or arrays.  Additional data structures include those from the [Picture Licensing Universal System (PLUS) Technical Specification](http://ns.useplus.org/go.ashx).

### Localizable text

Properties in the table below denoted as "Text (localizable)" must allow applications to display the text value in multiple human languages, per the [Lang Alt value type description in the IPTC specification](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#lang-alt-value-type) and the [XMP specification](https://developer.adobe.com/xmp/docs/XMPNamespaces/XMPDataTypes/#language-alternative).

### Property reference

|Property | Description | Data Type /<br/> Allowed Values | Property Name |
|---|---|---|---|
|Additional Model Information|Information about the ethnicity and other facets of the model(s) in a model-released image.|Text|`Iptc4xmpExt:AddlModelInfo`
|Alt Text (Accessibility)|A brief textual description of the purpose and meaning of an image that can be accessed by assistive technology or displayed when the image is disabled in the browser. It should not exceed 250 characters.|Text ([localizable](#localizable-text))|`Iptc4xmpCore:AltTextAccessibility`
|Artwork or Object in the Image|A set of metadata about artwork or an object in the image|One or more [Artwork or Object in the Image structures](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#artwork-or-object-in-the-image-structure)|`Iptc4xmpExt:ArtworkOrObject`
|Code of Organization Featured in the Image|Code from a controlled vocabulary for identifying the organization or company which is featured in the image; for example a stock ticker symbol.  |One ore more codes with format: `<CV-IDENTIFIER>:<CV-CODE>` for example, `nasdaq:companyA` |`Iptc4xmpExt:OrganisationInImageCode`
|Contributor|Party or parties (person or organization) which contributed to the image, refinement by the role attribute.|One or more [Entity or Concept with role structures](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#entity-or-concept-with-role-structure)|`Iptc4xmpExt:Contributor`
|Copyright Notice|Any necessary copyright notice for claiming the intellectual property for this photograph. Should identify the current owner of the copyright for the photograph. Other entities like the creator of the photograph may be added in the corresponding field. Notes on usage rights should be provided in "Rights usage terms".|Text ([localizable](#localizable-text))|`dc:rights`
|Copyright Owner|Owner or owners of the copyright in the licensed image.|[plus-CopyrightOwner](http://ns.useplus.org/LDF/ldf-XMPSpecification#CopyrightOwner) (up to three)|`plus:CopyrightOwner`
|Creator|Contains the name of the photographer, but in cases where the photographer should not be identified the name of a company or organization may be appropriate.|Text|`dc:creator`
|Creator’s Contact Info|The creator’s contact information provides all necessary information to get in contact with the creator of this image and comprises a set of sub-properties for proper addressing.| Creator's [Contact Info structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#contact-information-structure)|`Iptc4xmpCore:CreatorContactInfo`
|Creator’s job title|Contains the job title of the photographer. As this is sort of a qualifier the Creator element has to be filled in as mandatory prerequisite for using Creator’s Job title.|Text|`photoshop:AuthorsPosition`
|Credit Line|The credit to person(s) and/or organization(s) required by the supplier of the image to be used when published. This is a free-text field.|Text|`photoshop:Credit`
|CV-Term About Image|One or more topics, themes or entities the content is about, each one expressed by a term from a Controlled Vocabulary.|One or more [CV-Term structures](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#cv-term-structure)|`Iptc4xmpExt:AboutCvTerm`
|Data Mining|DO NOT USE this property. Instead use the C2PA ["do not train" assertion](assertions-actions#do-not-train-assertion) .| One of the URIs listed in [PLUS Specification Data Mining](http://ns.useplus.org/LDF/ldf-XMPSpecification#DataMining) section.|`plus:DataMining`
|Date Created|Designates the date and optionally the time the content of the image was created rather than the date of the creation of the digital representation.| Date in ISO 8601 format. See [note](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#date-value-type) |`photoshop:DateCreated`
|Description|A textual description, including captions, of the image.|Text ([localizable](#localizable-text))|`dc:description`
|Description Writer|Identifier or the name of the person(s) involved in writing, editing or correcting the Description, Alt Text (Accessibility), or Extended Description (Accessibility) of the image.|Text|`photoshop:CaptionWriter`
|Digital Image GUID|Globally unique identifier for this digital image. It is created and applied by the creator of the digital image at the time of its creation . This value shall not be changed after that time.|Text|`Iptc4xmpExt:DigImageGUID`
|Digital Source Type|The type of the source of this digital image|An [IPTC digital source type code](./assertions-actions#digital-source-type)|`Iptc4xmpExt:DigitalSourceType`
|Embedded Encoded Rights Expression|An embedded rights expression using any rights expression language| One or more [Embedded Encoded Rights Expression (EERE) structures](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#embedded-encoded-rights-expression-eere-structure) |`Iptc4xmpExt:EmbdEncRightsExpr`
|Event Identifier|Identifier(s) of the specific event at which the photo was taken|One or more URIs|`Iptc4xmpExt:EventId`
|Event Name|Names or describes the specific event at which the photo was taken.|Text ([localizable](#localizable-text)) |`Iptc4xmpExt:Event`
|Extended Description (Accessibility)|  A detailed textual description of the purpose and meaning of an image that elaborates on the _Alt Text (Accessibility)_ property. No character limitation. Not required if the Alt Text (Accessibility) field sufficiently describes the image.|Text ([localizable](#localizable-text)) |`Iptc4xmpCore:ExtDescrAccessibility`
|Genre|Artistic, style, journalistic, product or other genre(s) of the image (expressed by a term from any Controlled Vocabulary)|One or more [CV-Term structures](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#cv-term-structure) |`Iptc4xmpExt:Genre`
|Headline|A brief synopsis of the caption. Headline is not the same as Title.|Text|`photoshop:Headline`
|Image Creator|Creator or creators of the image|[plus-ImageCreator](http://ns.useplus.org/LDF/ldf-XMPSpecification#ImageCreator) (up to three)|`plus:ImageCreator`
|Image Rating|Rating of the image by its user or supplier|Decimal: <br/>-1: "rejected" <br/>0: "unrated" (default)<br/>0 to 5, inclusive. |`xmp:Rating`
|Image Region|Sets a region inside an image by defining its boundaries. All pixels of the boundary are also part of the region. It may include metadata related to this region.| One or more [Image Region structures](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#image-region-structure) |`Iptc4xmpExt:ImageRegion`
|Image Registry Entry|Both a Registry Item Id and a Registry Organization Id to record any registration of this digital image with a registry.| One or more [Registry Entry structures](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#registry-entry-structure) |`Iptc4xmpExt:RegistryId`
|Image Supplier|Identifies the most recent supplier of the image, who is not necessarily its owner or creator.|[plus-ImageSupplier](http://ns.useplus.org/LDF/ldf-XMPSpecification#ImageSupplier) |`plus:ImageSupplier`
|Image Supplier Image ID|Optional identifier assigned by the Image Supplier to the image.|Text|`plus:ImageSupplierImageID`
|Instructions|Any number of instructions from the provider or creator to the receiver of the image|Text|`photoshop:Instructions`
|Job Id|Number or identifier for the purpose of improved workflow handling. This is a user created identifier related to the job for which the image is supplied.|Text|`photoshop:TransmissionReference`
|Keywords|Keywords to express the subject of the image. Keywords may be free text and don’t have to be taken from a controlled vocabulary. |Text|`dc:subject`
|Licensor|A person or company that should be contacted to obtain a license for using the item or who has licensed the item.|[plus-Licensor](http://ns.useplus.org/LDF/ldf-XMPSpecification#Licensor) (up to three)|`plus:Licensor`
|Linked Encoded Rights Expression|A linked rights expression using any rights expression language.| One or more [Linked Encoded Rights Expression (LERE) structures](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#linked-encoded-rights-expression-lere-structure) |`Iptc4xmpExt:LinkedEncRightsExpr`
|Location created|The location the photo was taken.| [Location structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#location-structure) |Iptc4xmpExt:LocationCreated
|Location Shown in the Image|A location shown in the image.| One or more [Location structures](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#location-structure) |`Iptc4xmpExt:LocationShown`
|Max Avail Height|The maximum available height in pixels of the original photo from which this photo has been derived by downsizing.|Integer|`Iptc4xmpExt:MaxAvailHeight`
|Max Avail Width|The maximum available width in pixels of the original photo from which this photo has been derived by downsizing.|Integer|`Iptc4xmpExt:MaxAvailWidth`
|Minor Model Age Disclosure|Age of the youngest model pictured in the image, at the time that the image was made.|One of the URIs listed in the [PLUS Specification Minor Model Age Disclosure](http://ns.useplus.org/LDF/ldf-XMPSpecification#MinorModelAgeDisclosure) section. |`plus:MinorModelAgeDisclosure`
|Model Age|Age of the human model(s) at the time this image was taken in a model released image.|One or more Integers|`Iptc4xmpExt:ModelAge`
|Model Release Id|Identifier(s) of a Model Release document.|Text (one or more). See [PLUS Specification Model Release ID](http://ns.useplus.org/LDF/ldf-XMPSpecification#ModelReleaseID) |`plus:ModelReleaseID`
|Model Release Status|Summarizes the availability and scope of model releases authorizing usage of the likenesses of persons appearing in the photograph.|One of the URIs listed in the [PLUS Specification Model Release Status](http://ns.useplus.org/LDF/ldf-XMPSpecification#ModelReleaseStatus) section.|`plus:ModelReleaseStatus`
|Name of Organization Featured in the Image|Name of the organization or company which is featured in the image.|Text (one or more)|`Iptc4xmpExt:OrganisationInImageName`
|Other Constraints|Additional constraints on the use of the asset.|Text (one or more) ([localizable](#localizable-text))|`plus:OtherConstraints`
|Person Shown in the Image|Name of a person shown in the image.|Text (one or more)|`Iptc4xmpExt:PersonInImage`
|Person Shown in the Image with Details|Details about a person the content is about.| [Person structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#person-structure) |`Iptc4xmpExt:PersonInImageWDetails`
|Product Shown in the Image|A product the content is about.| One or more [Product structures](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#product-structure) |`Iptc4xmpExt:ProductInImage`
|Property Release Id|Identifier(s) of a Property Release document.|Text (one or more). See [PLUS Specification Property Release ID](http://ns.useplus.org/LDF/ldf-XMPSpecification#PropertyReleaseID) |`plus:PropertyReleaseID`
|Property Release Status|Summarizes the availability and scope of property releases authorizing usage of the properties appearing in the photograph.|One of the URIs listed from the [PLUS Specification Property Release Status](http://ns.useplus.org/LDF/ldf-XMPSpecification#PropertyReleaseStatus) section.|`plus:PropertyReleaseStatus`
|Rights Usage Terms|The licensing parameters of the image expressed in free-text.|Text ([localizable](#localizable-text)) |`xmpRights:UsageTerms`
|Scene Code|Describes the scene of a photo content. Specifies one ore more terms from the IPTC "Scene-NewsCodes". Each Scene is represented as a string of six digits in an unordered list.|One or more six-digit  [IPTC Scene NewsCodes](http://cv.iptc.org/newscodes/scene/). |`Iptc4xmpCore:Scene`
|Source (Supply Chain)|The name of a person or party who has a role in the content supply chain. This could be an agency, a member of an agency, an individual or a combination. Source could be different from Creator and from the entities in the Copyright Notice.|Text|`photoshop:Source`
|Title|A shorthand reference for the digital image. Title provides a short human readable name which can be a text and/or numeric reference. It is not the same as Headline.|Text ([localizable](#localizable-text))|`dc:title`
|Web Statement of Rights|URL referencing a web resource providing a statement of the copyright ownership and usage rights of the image.|Text (URI) |`xmpRights:WebStatement`

