---
id: iptc-properties
title: IPTC photo metadata properties
hide_table_of_contents: true
---

IPTC photo metadata properties are defined in the [IPTC Photo Metadata Standard](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata) specification.  The table below is a summary of the properties for convenience.  Refer to the specification for complete information.

Additionally, the table below:
- Summarizes both IPTC Core and IPTC Extension properties.
- Does not contain "legacy" properties, since they are superseded by IPTC Extension properties.

Data Types:

- Text = sequence of characters, can be used for free text or other purposes
- Integer = integer number 
- Decimal = decimal number
- URL = Uniform Resource Locator, in most cases the web address of a resource
- URI = Uniform Resource Identifier for identifying a resource, this includes URLs
-  `...Structure` = a structure of sub-properties 

|Property Name | Description | Type / Values | XMP tag |
|---|---|---|---|
|Additional Model Information|Information about the ethnicity and other facets of the model(s) in a model-released image.|Text|`Iptc4xmpExt:AddlModelInfo`
|Alt Text (Accessibility)|A brief textual description of the purpose and meaning of an image that can be accessed by assistive technology or displayed when the image is disabled in the browser. It should not exceed 250 characters.|Text|`Iptc4xmpCore:AltTextAccessibility`
|Artwork or Object in the Image|A set of metadata about artwork or an object in the image|Artwork or Object in the Image structure|`Iptc4xmpExt:ArtworkOrObject`
|Code of Organization Featured in the Image|Code from a controlled vocabulary for identifying the organization or company which is featured in the image.|CV-code|`Iptc4xmpExt:OrganisationInImageCode`
|Contributor|Party or parties (person or organization) which contributed to the image, refinement by the role attribute.|Entity or Concept with role structure|`Iptc4xmpExt:Contributor`
|Copyright Notice|Contains any necessary copyright notice for claiming the intellectual property for this photograph and should identify the current owner of the copyright for the photograph. Other entities like the creator of the photograph may be added in the corresponding field. Notes on usage rights should be provided in "Rights usage terms".|Text|`dc:rights`
|Copyright Owner|Owner or owners of the copyright in the licensed image.|plus-CopyrightOwner (up to three)|`plus:CopyrightOwner`
|Creator|Contains the name of the photographer, but in cases where the photographer should not be identified the name of a company or organization may be appropriate.|Text|`dc:creator`
|Creator’s Contact Info|The creator’s contact information provides all necessary information to get in contact with the creator of this image and comprises a set of sub-properties for proper addressing.|Creators Contact Info structure|`Iptc4xmpCore:CreatorContactInfo`
|Creator’s job title|Contains the job title of the photographer. As this is sort of a qualifier the Creator element has to be filled in as mandatory prerequisite for using Creator’s Job title.|Text|`photoshop:AuthorsPosition`
|Credit Line|The credit to person(s) and/or organization(s) required by the supplier of the image to be used when published. This is a free-text field.|Text|`photoshop:Credit`
|CV-Term About Image|One or more topics, themes or entities the content is about, each one expressed by a term from a Controlled Vocabulary.|CV-Term structure|`Iptc4xmpExt:AboutCvTerm`
|Data Mining|Data mining prohibition or permission, optionally with constraints.|CV-Code|`plus:DataMining`
|Date Created|Designates the date and optionally the time the content of the image was created rather than the date of the creation of the digital representation.|DateTime (preferred: truncated DateTime)|`photoshop:DateCreated`
|Description|A textual description, including captions, of the image.|Text|`dc:description`
|Description Writer|Identifier or the name of the person(s) involved in writing, editing or correcting the Description, Alt Text (Accessibility), or Extended Description (Accessibility) of the image.|Text|`photoshop:CaptionWriter`
|Digital Image GUID|Globally unique identifier for this digital image. It is created and applied by the creator of the digital image at the time of its creation . This value shall not be changed after that time.|Text|`Iptc4xmpExt:DigImageGUID`
|Digital Source Type|The type of the source of this digital image|One of the IPTC digital source type codes; see [digital source type](assertions-actions#digital-source-type)|`Iptc4xmpExt:DigitalSourceType`
|Embedded Encoded Rights Expression|An embedded rights expression using any rights expression language|Embedded Encoded Rights Expression (EERE) structure|`Iptc4xmpExt:EmbdEncRightsExpr`
|Event Identifier|Identifier(s) of the specific event at which the photo was taken|URI|`Iptc4xmpExt:EventId`
|Event Name|Names or describes the specific event at which the photo was taken.|Text|`Iptc4xmpExt:Event`
|Extended Description (Accessibility)|A more detailed textual description of the purpose and meaning of an image that elaborates on the information provided by the Alt Text (Accessibility) property. This property does not have a character limitation and is not required if the Alt Text (Accessibility) field sufficiently describes the image.|Text|`Iptc4xmpCore:ExtDescrAccessibility`
|Genre|Artistic, style, journalistic, product or other genre(s) of the image (expressed by a term from any Controlled Vocabulary)|CV-Term structure|`Iptc4xmpExt:Genre`
|Headline|A brief synopsis of the caption. Headline is not the same as Title.|Text|`photoshop:Headline`
|Image Creator|Creator or creators of the image|plus-ImageCreator (up to three)|`plus:ImageCreator`
|Image Rating|Rating of the image by its user or supplier|Decimal|`xmp:Rating`
|Image Region|Sets a region inside an image by defining its boundaries. All pixels of the boundary are also part of the region. It may include metadata related to this region.|Image Region structure|`Iptc4xmpExt:ImageRegion`
|Image Registry Entry|Both a Registry Item Id and a Registry Organization Id to record any registration of this digital image with a registry.|Registry Entry structure|`Iptc4xmpExt:RegistryId`
|Image Supplier|Identifies the most recent supplier of the image, who is not necessarily its owner or creator.|plus-ImageSupplier|`plus:ImageSupplier`
|Image Supplier Image ID|Optional identifier assigned by the Image Supplier to the image.|Text|`plus:ImageSupplierImageID`
|Instructions|Any number of instructions from the provider or creator to the receiver of the image|Text|`photoshop:Instructions`
|Job Id|Number or identifier for the purpose of improved workflow handling. This is a user created identifier related to the job for which the image is supplied.|Text|`photoshop:TransmissionReference`
|Keywords|Keywords to express the subject of the image. Keywords may be free text and don’t have to be taken from a controlled vocabulary. Codes from the controlled vocabulary IPTC Subject NewsCodes must go to the "Subject Code" field.|Text|`dc:subject`
|Licensor|A person or company that should be contacted to obtain a license for using the item or who has licensed the item.|plus-Licensor (up to three)|`plus:Licensor`
|Linked Encoded Rights Expression|A linked rights expression using any rights expression language.|Linked Encoded Rights Expression (LERE) structure|`Iptc4xmpExt:LinkedEncRightsExpr`
|Location created|The location the photo was taken.|Location structure|Iptc4xmpExt:LocationCreated
|Location Shown in the Image|A location shown in the image.|Location structure|`Iptc4xmpExt:LocationShown`
|Max Avail Height|The maximum available height in pixels of the original photo from which this photo has been derived by downsizing.|Integer|`Iptc4xmpExt:MaxAvailHeight`
|Max Avail Width|The maximum available width in pixels of the original photo from which this photo has been derived by downsizing.|Integer|`Iptc4xmpExt:MaxAvailWidth`
|Minor Model Age Disclosure|Age of the youngest model pictured in the image, at the time that the image was made.|CV-code|`plus:MinorModelAgeDisclosure`
|Model Age|Age of the human model(s) at the time this image was taken in a model released image.|Integer|`Iptc4xmpExt:ModelAge`
|Model Release Id|Identifier(s) of a Model Release document.|Text|`plus:ModelReleaseID`
|Model Release Status|Summarises the availability and scope of model releases authorizing usage of the likenesses of persons appearing in the photograph.|CV-code|`plus:ModelReleaseStatus`
|Name|Description|Type|Property (XMP tag)
|Name of Organization Featured in the Image|Name of the organization or company which is featured in the image.|Text|`Iptc4xmpExt:OrganisationInImageName`
|Other Constraints|Additional constraints on the use of the asset.|Text|`plus:OtherConstraints`
|Person Shown in the Image|Name of a person shown in the image.|Text|`Iptc4xmpExt:PersonInImage`
|Person Shown in the Image with Details|Details about a person the content is about.|Person structure|`Iptc4xmpExt:PersonInImageWDetails`
|Product Shown in the Image|A product the content is about.|Product structure|`Iptc4xmpExt:ProductInImage`
|Property Release Id|Identifier(s) of a Property Release document.|Text|`plus:PropertyReleaseID`
|Property Release Status|Summarises the availability and scope of property releases authorizing usage of the properties appearing in the photograph.|CV-code|`plus:PropertyReleaseStatus`
|Rights Usage Terms|The licensing parameters of the image expressed in free-text.|Text|`xmpRights:UsageTerms`
|Scene Code|Describes the scene of a photo content. Specifies one ore more terms from the IPTC "Scene-NewsCodes". Each Scene is represented as a string of 6 digits in an unordered list.|CV-code|`Iptc4xmpCore:Scene`
|Source (Supply Chain)|The name of a person or party who has a role in the content supply chain. This could be an agency, a member of an agency, an individual or a combination. Source could be different from Creator and from the entities in the Copyright Notice.|Text|`photoshop:Source`
|Title|A shorthand reference for the digital image. Title provides a short human readable name which can be a text and/or numeric reference. It is not the same as Headline.|Text|dc:title
|Web Statement of Rights|URL referencing a web resource providing a statement of the copyright ownership and usage rights of the image.|Text|`xmpRights:WebStatement`