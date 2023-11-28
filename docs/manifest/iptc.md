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

Some properties have non-primitive types, referred to in the IPTC specification as "structures."  These structures ("objects" in JSON terminology) are described in detail in [Structures](#structures).

### Localizable text

Properties denoted as "Localizable text" must allow applications to display the text value in multiple human languages, depending on user preference.  For example:

```json 
"occupation": {
  "ja": "忍者",
  "en": "Ninja",
  "cs": "Nindža"
}
```

For more information, see: 
- [Lang Alt value type](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#lang-alt-value-type) in the IPTC specification.
- [AltLang structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#altlang-structure-2) in the IPTC specification.
- [Language alternative](https://developer.adobe.com/xmp/docs/XMPNamespaces/XMPDataTypes/#language-alternative) in the XMP specification.

### Property reference

|Property | Description | Data Type /<br/> Allowed Values | Property Name |
|---|---|---|---|
|Additional Model Information|Information about the ethnicity and other facets of the model(s) in a model-released image.|Text|`Iptc4xmpExt:AddlModelInfo`
|Alt Text (Accessibility)|A brief textual description of the purpose and meaning of an image that can be accessed by assistive technology or displayed when the image is disabled in the browser. It should not exceed 250 characters.|[Localizable text](#localizable-text)|`Iptc4xmpCore:AltTextAccessibility`
|Artwork or Object in the Image|A set of metadata about artwork or an object in the image|One or more [ArtworkOrObject](#artworkorobject) objects. |`Iptc4xmpExt:ArtworkOrObject`
|Code of Organization Featured in the Image|Code from a controlled vocabulary for identifying the organization or company which is featured in the image; for example a stock ticker symbol.  |One ore more codes with format: `<CV-IDENTIFIER>:<CV-CODE>` for example, `nasdaq:companyA` |`Iptc4xmpExt:OrganisationInImageCode`
|Contributor|Party or parties (person or organization) which contributed to the image, refinement by the role attribute.|One or more [EntityWRole](#entitywrole) objects.  |`Iptc4xmpExt:Contributor`
|Copyright Notice|Any necessary copyright notice for claiming the intellectual property for this photograph. Should identify the current owner of the copyright for the photograph. Other entities like the creator of the photograph may be added in the corresponding field. Notes on usage rights should be provided in "Rights usage terms".|[Localizable text](#localizable-text)|`dc:rights`
|Copyright Owner|Owner or owners of the copyright in the licensed image.| Up to three [CopyrigthOwner](#copyrightowner) structures |`plus:CopyrightOwner`
|Creator|Contains the name of the photographer, but in cases where the photographer should not be identified the name of a company or organization may be appropriate.|Text|`dc:creator`
|Creator’s Contact Info|The creator’s contact information provides all necessary information to get in contact with the creator of this image and comprises a set of sub-properties for proper addressing. NOTE: Use the `Licensor` field instead, if you are using IPTC Extension fields. |[CreatorContactInfo](#creatorcontactinfo) structure|`Iptc4xmpCore:CreatorContactInfo`
|Creator’s job title|Contains the job title of the photographer. As this is sort of a qualifier the Creator element has to be filled in as mandatory prerequisite for using Creator’s Job title.|Text|`photoshop:AuthorsPosition`
|Credit Line|The credit to person(s) and/or organization(s) required by the supplier of the image to be used when published. This is a free-text field.|Text| `photoshop:Credit`
|CV-Term About Image|One or more topics, themes or entities the content is about, each one expressed by a term from a Controlled Vocabulary.|One or more [CvTerm](#cvterm) structures. |`Iptc4xmpExt:AboutCvTerm`
|Data Mining|DO NOT USE this property. Instead use the C2PA ["do not train" assertion](assertions-actions#do-not-train-assertion). | |
|Date Created|Designates the date and optionally the time the content of the image was created rather than the date of the creation of the digital representation.| Date in [ISO 8601 format](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#date-value-type). |`photoshop:DateCreated`
|Description|A textual description, including captions, of the image.|[Localizable text](#localizable-text)|`dc:description`
|Description Writer|Identifier or the name of the person(s) involved in writing, editing or correcting the Description, Alt Text (Accessibility), or Extended Description (Accessibility) of the image.|Text|`photoshop:CaptionWriter`
|Digital Image GUID|Globally unique identifier for this digital image. It is created and applied by the creator of the digital image at the time of its creation . This value shall not be changed after that time.|Text|`Iptc4xmpExt:DigImageGUID`
|Digital Source Type|The type of the source of this digital image|An [IPTC digital source type code](./assertions-actions#digital-source-type)|`Iptc4xmpExt:DigitalSourceType`
|Embedded Encoded Rights Expression|An embedded rights expression using any rights expression language| One or more [EmbdEncRightsExpr](#embdencrightsexpr) structures. |`Iptc4xmpExt:EmbdEncRightsExpr`
|Event Identifier|Identifier(s) of the specific event at which the photo was taken|One or more URIs|`Iptc4xmpExt:EventId`
|Event Name|Names or describes the specific event at which the photo was taken.|[Localizable text](#localizable-text) |`Iptc4xmpExt:Event`
|Extended Description (Accessibility)|  A detailed textual description of the purpose and meaning of an image that elaborates on the _Alt Text (Accessibility)_ property. No character limitation. Not required if the Alt Text (Accessibility) field sufficiently describes the image.|[Localizable text](#localizable-text) |`Iptc4xmpCore:ExtDescrAccessibility`
|Genre|Artistic, style, journalistic, product or other genre(s) of the image (expressed by a term from any Controlled Vocabulary)| One or more [CvTerm](#cvterm) structures.  |`Iptc4xmpExt:Genre`
|Headline|A brief synopsis of the caption. Headline is not the same as Title.|Text|`photoshop:Headline`
|Image Creator|Creator or creators of the image| Up to three [ImageCreator](#imagecreator) structures. |`plus:ImageCreator`
|Image Rating|Rating of the image by its user or supplier|Decimal: <br/>-1: "rejected" <br/>0: "unrated" (default)<br/>0...5 |`xmp:Rating`
|Image Region|Sets a region inside an image by defining its boundaries. All pixels of the boundary are also part of the region. It may include metadata related to this region.| One or more [ImageRegion](#imageregion) structures. |`Iptc4xmpExt:ImageRegion`
|Image Registry Entry|Both a Registry Item Id and a Registry Organization Id to record any registration of this digital image with a registry.| One or more [RegistryEntry](#registryentry) structures.  |`Iptc4xmpExt:RegistryId`
|Image Supplier|Identifies the most recent supplier of the image, who is not necessarily its owner or creator.| [ImageSupplier](#imagesupplier) structure. |`plus:ImageSupplier`
|Image Supplier Image ID|Optional identifier assigned by the Image Supplier to the image.|Text|`plus:ImageSupplierImageID`
|Instructions|Any number of instructions from the provider or creator to the receiver of the image|Text|`photoshop:Instructions`
|Job Id|Number or identifier for the purpose of improved workflow handling. This is a user created identifier related to the job for which the image is supplied.|Text|`photoshop:TransmissionReference`
|Keywords|Keywords to express the subject of the image. Keywords may be free text and don’t have to be taken from a controlled vocabulary. |Text|`dc:subject`
|Licensor|A person or company that should be contacted to obtain a license for using the item or who has licensed the item.| Up to three [Licensor](#licensor) structures. |`plus:Licensor`
|Linked Encoded Rights Expression|A linked rights expression using any rights expression language.| One or more [LinkedEncRightsExpr](#linkedencrightsexpr) structures.  |`Iptc4xmpExt:LinkedEncRightsExpr`
|Location created|The location the photo was taken.| [Location](#location) structure.  |`Iptc4xmpExt:LocationCreated`
|Location shown in the image|A location shown in the image.| One or more [Location](#location) structures. |`Iptc4xmpExt:LocationShown`
|Max Avail Height|The maximum available height in pixels of the original photo from which this photo has been derived by downsizing.|Integer|`Iptc4xmpExt:MaxAvailHeight`
|Max Avail Width|The maximum available width in pixels of the original photo from which this photo has been derived by downsizing.|Integer|`Iptc4xmpExt:MaxAvailWidth`
|Minor Model Age Disclosure|Age of the youngest model pictured in the image, at the time that the image was made.|One of the URIs listed in the [PLUS Specification Minor Model Age Disclosure](http://ns.useplus.org/LDF/ldf-XMPSpecification#MinorModelAgeDisclosure) section. |`plus:MinorModelAgeDisclosure`
|Model Age|Age of the human model(s) at the time this image was taken in a model released image.|One or more Integers|`Iptc4xmpExt:ModelAge`
|Model Release Id|Identifier(s) of a Model Release document.|Text (one or more). See [PLUS Specification Model Release ID](http://ns.useplus.org/LDF/ldf-XMPSpecification#ModelReleaseID) |`plus:ModelReleaseID`
|Model Release Status|Summarizes the availability and scope of model releases authorizing usage of the likenesses of persons appearing in the photograph.|One of the URIs listed in the [PLUS Specification Model Release Status](http://ns.useplus.org/LDF/ldf-XMPSpecification#ModelReleaseStatus) section.|`plus:ModelReleaseStatus`
|Name of Organization Featured in the Image|Name of the organization or company which is featured in the image.|Text (one or more)|`Iptc4xmpExt:OrganisationInImageName`
|Other Constraints|Additional constraints on the use of the asset.|Text (one or more) ([localizable](#localizable-text))|`plus:OtherConstraints`
|Person Shown in the Image|Name of a person shown in the image.|Text (one or more)|`Iptc4xmpExt:PersonInImage`
|Person Shown in the Image with Details|Details about a person the content is about.| [personWDetails](#personwdetails) structure |`Iptc4xmpExt:PersonInImageWDetails`
|Product Shown in the Image|A product the content is about.| One or more [ProductWGtin](#productwgtin) structures.  |`Iptc4xmpExt:ProductInImage`
|Property Release Id|Identifier(s) of a Property Release document.|Text (one or more). See [PLUS Specification Property Release ID](http://ns.useplus.org/LDF/ldf-XMPSpecification#PropertyReleaseID) |`plus:PropertyReleaseID`
|Property Release Status|Summarizes the availability and scope of property releases authorizing usage of the properties appearing in the photograph.|One of the URIs listed from the [PLUS Specification Property Release Status](http://ns.useplus.org/LDF/ldf-XMPSpecification#PropertyReleaseStatus) section.|`plus:PropertyReleaseStatus`
|Rights Usage Terms|The licensing parameters of the image expressed in free-text.|[Localizable text](#localizable-text) |`xmpRights:UsageTerms`
|Scene Code|Describes the scene of a photo content. Specifies one ore more terms from the IPTC "Scene-NewsCodes". Each Scene is represented as a string of six digits in an unordered list.|One or more six-digit  [IPTC Scene NewsCodes](http://cv.iptc.org/newscodes/scene/). |`Iptc4xmpCore:Scene`
|Source (Supply Chain)|The name of a person or party who has a role in the content supply chain. This could be an agency, a member of an agency, an individual or a combination. Source could be different from Creator and from the entities in the Copyright Notice.|Text|`photoshop:Source`
|Title|A shorthand reference for the digital image. Title provides a short human readable name which can be a text and/or numeric reference. It is not the same as Headline.|[Localizable text](#localizable-text)|`dc:title`
|Web Statement of Rights|URL referencing a web resource providing a statement of the copyright ownership and usage rights of the image.|Text (URI) |`xmpRights:WebStatement`

### Structures

This section documents the object structures used for IPTC photo metadata properties.  It is based on the [IPTC Photo Metadata technical specification](https://iptc.org/std-dev/photometadata/specification/iptc-pmd-techreference_2023.1.json) in JSON format.

#### ArtworkOrObject 

This structure provides details about artwork or an object in an image. Includes a Copyright Notice, a Creator, a Date Created, a Source, a Source Inventory Number and a Title.

See [Artwork or Object in the Image structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#artwork-or-object-in-the-image-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| circaDateCreated | String | N/A | [circaDateCreated](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#circa-date-created)
| contentDescription | Structure | [Localizable text](#localizable-text) | [contentDescription](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#content-description)
| contributionDescription | Structure | [Localizable text](#localizable-text) | [contributionDescription](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#contribution-description)
| copyrightNotice | String | N/A | [copyrightNotice](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#copyright-notice)
| creatorNames | String | N/A | [creatorNames](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#creator)
| creatorIdentifiers | String | URI | [creatorIdentifiers](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#creator-id)
| currentCopyrightOwnerIdentifier | String | URI | [currentCopyrightOwnerIdentifier](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#current-copyright-owner-id)
| currentCopyrightOwnerName | String | N/A | [currentCopyrightOwnerName](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#current-copyright-owner-name)
| currentLicensorIdentifier | String | URI | [currentLicensorIdentifier](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#current-licensor-id)
| currentLicensorName | String | N/A | [currentLicensorName](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#current-licensor-name)
| dateCreated | String | date-time | [dateCreated](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#date-created)
| physicalDescription | Structure | [Localizable text](#localizable-text) | [physicalDescription](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#physical-description)
| source | String | N/A | [source](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#source)
| sourceInventoryNr | String | N/A | [sourceInventoryNr](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#source-inventory-number)
| sourceInventoryUrl | String | URL | [sourceInventoryUrl](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#source-inventory-url)
| stylePeriod | String | N/A | [stylePeriod](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#style-period)
| title | Structure | [Localizable text](#localizable-text) | [title](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#title)


#### CopyrightOwner 

This structure provides information on the owner or owners of the copyright in the licensed image. The copyright owner, image creator, image supplier and licensor may be the same or different entities.

See [CopyrightOwner](http://ns.useplus.org/LDF/ldf-XMPSpecification#CopyrightOwner) in the Picture Licensing Universal System (PLUS) specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| copyrightOwnerId | String | N/A | [copyrightOwnerId](http://ns.useplus.org/LDF/ldf-XMPSpecification#CopyrightOwnerID)
| copyrightOwnerName | String | N/A | [copyrightOwnerName](http://ns.useplus.org/LDF/ldf-XMPSpecification#CopyrightOwnerID)


#### CreatorContactInfo 

This generic structure provides a basic set of information to get in contact with a person or organization. 

See [Contact Info structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#contact-information-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| address | String | N/A | [address](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#address)
| city | String | N/A | [city](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#city)
| country | String | N/A | [country](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#country)
| emailwork | String | N/A | [emailwork](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#email-addresses)
| phonework | String | N/A | [phonework](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#phone-numbers)
| postalCode | String | N/A | [postalCode](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#postal-code)
| region | String | N/A | [region](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#state/province)
| weburlwork | String | URL | [weburlwork](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#web-urls)


#### CvTerm 

This structure provides details of a controlled vocabulary term the image is about.

See [CV-Term structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#cv-term-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| cvId | String | URI | [cvId](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#cv-term-cv-id)
| cvTermId | String | URI | [cvTermId](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#cv-term-id)
| cvTermName | Structure | [Localizable text](#localizable-text) | [cvTermName](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#cv-term-name)
| cvTermRefinedAbout | String | URI | [cvTermRefinedAbout](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#refined-'about'-relationship-of-the-cv-term)


#### EmbdEncRightsExpr 

This structure provides details of an embedded encoded rights expression.

See [Embedded Encoded Rights Expression (EERE) structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#embedded-encoded-rights-expression-eere-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| encRightsExpr | String | N/A | [encRightsExpr](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#encoded-rights-expression)
| rightsExprEncType | String | N/A | [rightsExprEncType](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#encoding-type)
| rightsExprLangId | String | URI | [rightsExprLangId](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#rights-expression-language-id)


#### Entity

This structure is a datatype for a named entity or concept.

See [Entity or Concept structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#entity-or-concept-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| identifiers | String | URI | [identifiers](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#identifier)
| name | Structure | [Localizable text](#localizable-text) | [name](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#name)


#### EntityWRole

This structure is a datatype for a named entity or concept with a role property.

See [Entity or Concept with role structures](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#entity-or-concept-with-role-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| identifiers | String | URI | [identifiers](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#identifier)
| name | Structure | [Localizable text](#localizable-text) | [name](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#name)
| role | String | N/A | [role](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#role)


#### ImageCreator

This structure provides information on the creator(s) of an image. 	In many countries, the image creator must be attributed in association with any use of the image. The image creator, copyright owner, image supplier and licensor may be the same or different entities.

See [ImageCreator](http://ns.useplus.org/LDF/ldf-XMPSpecification#ImageCreator) in the Picture Licensing Universal System (PLUS) specification..

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| imageCreatorId | String | N/A | [imageCreatorId](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#image-creator-id)
| imageCreatorName | String | N/A | [imageCreatorName](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#image-creator-name)


#### ImageRegion

This structure defines the boundaries of an image region, some characteristics of the image region, and metadata properties related to the region.

See [Image Region structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#image-region-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| regionBoundary | Structure | [RegionBoundary](#regionboundary) | [regionBoundary](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#region-boundary)
| rId | String | N/A | [rId](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#region-identifier)
| name | Structure | [Localizable text](#localizable-text) | [name](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#region-name)
| rCtype | Structure | Entity | [rCtype](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#region-content-type)
| rRole | Structure | Entity | [rRole](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#region-role)
| &lt;other&gt; | any | N/A | [Other metadata property](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#other-metadata-property)


#### ImageSupplier

This structure provides information on the party providing the image to the licensor or to the licensee on behalf of the licensor. 	In some instances, a licensor serves as an agent or distributor for a third party supplying the image either to the licensor, or directly to the Licensee. The image creator, copyright owner, image supplier and licensor may be the same or different entities.

See [ImageSupplier](http://ns.useplus.org/LDF/ldf-XMPSpecification#ImageSupplier) in the PLUS Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| imageSupplierId | String | N/A | [imageSupplierId](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#image-supplier-id)
| imageSupplierName | String | N/A | [imageSupplierName](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#image-supplier-name)

#### Licensor

This structure provides information on the party or parties granting the license to the licensee.

See [Licensor](http://ns.useplus.org/LDF/ldf-XMPSpecification#Licensor) in the PLUS Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| licensorId | String | N/A | [licensorId](https://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorID)
| licensorName | String | N/A | [licensorName](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorName)
| licensorAddress | String | N/A | [licensorAddress](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorAddress)
| licensorAddressDetail | String | N/A | [licensorAddressDetail](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorAddressDetail)
| licensorCity | String | N/A | [licensorCity](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorCity)
| licensorStateProvince | String | N/A | [licensorStateProvince](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorRegion)
| licensorPostalCode | String | N/A | [licensorPostalCode](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorPostalCode)
| licensorCountryName | String | N/A | [licensorCountryName](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorCountry)
| licensorTelephoneType1 | String | URL | [licensorTelephoneType1](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorTelephoneType1)
| licensorTelephone1 | String | N/A | [licensorTelephone1](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorTelephone1)
| licensorTelephoneType2 | String | URL | [licensorTelephoneType2](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorTelephoneType2)
| licensorTelephone2 | String | N/A | [licensorTelephone2](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorTelephone2)
| licensorEmail | String | N/A | [licensorEmail](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorEmail)
| licensorUrl | String | URL | [licensorUrl](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorURL)

#### LinkedEncRightsExpr

This structure provides details of a linked encoded rights expression.

See [Linked Encoded Rights Expression (LERE) structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#linked-encoded-rights-expression-lere-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| linkedRightsExpr | String | URL | [linkedRightsExpr](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#link-to-encoded-rights-expression)
| rightsExprEncType | String | URI | [rightsExprEncType](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#encoding-type)
| rightsExprLangId | String | URI | [rightsExprLangId](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#rights-expression-language-id)


#### Location

This structure provides details about a location. 

See [Location structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#location-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| city | String | N/A | [city](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#city)
| countryCode | String | N/A | [countryCode](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#country-iso-code)
| countryName | String | N/A | [countryName](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#country-name)
| gpsAltitude | number | N/A | [gpsAltitude](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#gps-altitude)
| gpsLatitude | number | N/A | [gpsLatitude](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#gps-latitude)
| gpsLongitude | number | N/A | [gpsLongitude](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#gps-longitude)
| identifiers | String | URI | [identifiers](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#location-identifier)
| name | Structure | [Localizable text](#localizable-text) | [name](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#location-name)
| provinceState | String | N/A | [provinceState](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#province-or-state)
| sublocation | String | N/A | [sublocation](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#sublocation)
| worldRegion | String | N/A | [worldRegion](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#world-region)


#### PersonWDetails

This structure provides details about a single person in the image.

See [Person structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#person-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| characteristics | Structure | CvTerm | [characteristics](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#characteristics)
| description | Structure | [Localizable text](#localizable-text) | [description](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#description)
| identifiers | String | URI | [identifiers](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#identifier)
| name | Structure | [Localizable text](#localizable-text) | [name](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#name)


#### ProductWGtin

This structure provides details about a product.

See [Product structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#product-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| description | Structure | [Localizable text](#localizable-text) | [description](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#description)
| gtin | String | N/A | [gtin](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#gtin)
| identifiers | String | URI | [identifiers](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#identifier)
| name | Structure | [Localizable text](#localizable-text) | [name](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#name)


#### RegionBoundary

This structure defines the boundary of a region inside an image. It may define a single point to express special characteristics of the point, or may define a line to express a division of the image.

See [Region Boundary structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#region-boundary-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| rbShape | String | N/A | [rbShape](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#boundary-shape)
| rbUnit | String | N/A | [rbUnit](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#boundary-measuring-unit)
| rbX | number | N/A | [rbX](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#x-axis-coordinate)
| rbY | number | N/A | [rbY](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#y-axis-coordinate)
| rbW | number | N/A | [rbW](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#rectangle-width)
| rbH | number | N/A | [rbH](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#rectangle-height)
| rbRx | number | N/A | [rbRx](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#circle-radius)
| rbVertices | Structure | [RegionBoundaryPoint](#regionboundarypoint) | [rbVertices](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#polygon-vertices)


#### RegionBoundaryPoint

This structure defines a point in an image by its coordinates.

See [Region Boundary Point structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#region-boundary-point-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| rbX | number | N/A | [rbX](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#x-axis-coordinate)
| rbY | number | N/A | [rbY](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#y-axis-coordinate)

#### RegistryEntry

This structure defines an entry in a registry, including the ID for the image issued by the registry and the registry’s ID.

See [Registry Entry structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#registry-entry-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| assetIdentifier | String | N/A | [assetIdentifier](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#item-id)
| registryIdentifier | String | N/A | [registryIdentifier](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#organisation-id)
| role | String | URI | [role](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#role)


