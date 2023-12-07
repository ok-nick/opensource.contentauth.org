---
id: iptc-properties
title: IPTC photo metadata properties
hide_table_of_contents: true
---

:::note
This page provides a summary of IPTC photo metadata properties based on the [IPTC Photo Metadata Standard](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata). <br/>**This information is provided for convenience: It's not authoritative, and in all cases the specification takes precedence**. 
::: 

Contents:
- [Overview](#overview)
- [Property reference](#property-reference)
- [Structures](#structures)

## Overview

IPTC photo metadata provides data about photographs that can be processed by software. 

The table below consolidates information from the two IPTC Photo Metadata schemas: The original IPTC Core Schema, released in 2004, and the IPTC Extension schema, released in 2008.


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

## Property reference

The table below:
- Summarizes both [IPTC core metadata properties](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#metadata-properties) and [IPTC extension properties](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#metadata-properties-2).
- Does not include "legacy" core properties, since they are superseded by IPTC extension properties.
- Does not include properties from the [IPTC Video Metadata Hub Specification](https://www.iptc.org/std/videometadatahub/userguide/#property-reference-table).

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

## Structures

This section documents the object structures used for IPTC photo metadata properties.  It is based on the [IPTC Photo Metadata technical specification](https://iptc.org/std-dev/photometadata/specification/iptc-pmd-techreference_2023.1.json) in JSON format.

#### ArtworkOrObject 

This structure provides details about artwork or an object in an image. Includes a Copyright Notice, a Creator, a Date Created, a Source, a Source Inventory Number and a Title.

See [Artwork or Object in the Image structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#artwork-or-object-in-the-image-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `Iptc4xmpExt:AOCircaDateCreated` | String | N/A | [Circa Date Created](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#circa-date-created)
| `Iptc4xmpExt:AOContentDescription` | Structure | [Localizable text](#localizable-text) | [Content Description](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#content-description)
| `Iptc4xmpExt:AOContributionDescription` | Structure | [Localizable text](#localizable-text) | [Contribution Description](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#contribution-description)
| `Iptc4xmpExt:AOCopyrightNotice` | String | N/A | [Copyright Notice](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#copyright-notice-2)
| `Iptc4xmpExt:AOCreatorNames` | String | N/A | [Creator](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#creator-2)
| `Iptc4xmpExt:AOCreatorIdentifiers` | String | URI | [Creator ID](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#creator-id)
| `Iptc4xmpExt:AOCurrentCopyrightOwnerIdentifier` | String | URI | [Current Copyright Owner ID](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#current-copyright-owner-id)
| `Iptc4xmpExt:AOCurrentCopyrightOwnerName` | String | N/A | [Current Copyright Owner Name](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#current-copyright-owner-name)
| `Iptc4xmpExt:AOCurrentLicensorIdentifier` | String | URI | [Current Licensor Identifier](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#current-licensor-id)
| `Iptc4xmpExt:AOCurrentLicensorName` | String | N/A | [Current LicensorName](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#current-licensor-name)
| `Iptc4xmpExt:AODateCreated` | String | date-time | [Date Created](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#date-created)
| `Iptc4xmpExt:AOPhysicalDescription` | Structure | [Localizable text](#localizable-text) | [Physical Description](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#physical-description)
| `Iptc4xmpExt:AOSource` | String | N/A | [Source](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#source)
| `Iptc4xmpExt:AOSourceInvNo` | String | N/A | [Source Inventory Number](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#source-inventory-number)
| `Iptc4xmpExt:AOSourceInvURL` | String | URL | [Source Inventory URL](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#source-inventory-url)
| `Iptc4xmpExt:AOStylePeriod` | String | N/A | [Style Period](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#style-period)
| `Iptc4xmpExt:AOTitle` | Structure | [Localizable text](#localizable-text) | [Title](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#title-2)


#### CopyrightOwner 

This structure provides information on the owner or owners of the copyright in the licensed image. The copyright owner, image creator, image supplier and licensor may be the same or different entities.

See [CopyrightOwner](http://ns.useplus.org/LDF/ldf-XMPSpecification#CopyrightOwner) in the Picture Licensing Universal System (PLUS) specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `plus:CopyrightOwnerId` | String | N/A | [Copyright Owner ID](http://ns.useplus.org/LDF/ldf-XMPSpecification#CopyrightOwnerID)
| `plus:CopyrightOwnerName` | String | N/A | [Copyright Owner Name](http://ns.useplus.org/LDF/ldf-XMPSpecification#CopyrightOwnerName)


#### CreatorContactInfo 

This generic structure provides a basic set of information to get in contact with a person or organization. 

See [Contact Info structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#contact-information-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `Iptc4xmpCore:CiAdrExtadr` | String | N/A | [Address](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#address)
| `Iptc4xmpCore:CiAdrCity` | String | N/A | [City](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#city)
| `Iptc4xmpCore:CiAdrCtry` | String | N/A | [Country](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#country)
| `Iptc4xmpCore:CiEmailWork` | String | N/A | [Email address(es)](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#email-addresses)
| `Iptc4xmpCore:CiTelWork` | String | N/A | [Phone number(s)](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#phone-numbers)
| `Iptc4xmpCore:CiAdrPcode` | String | N/A | [Postal Code](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#postal-code)
| `Iptc4xmpCore:CiAdrRegion ` | String | N/A | [State/Province](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#state/province)
| `Iptc4xmpCore:CiUrlWork` | String | URL | [ Web URL(s)](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#web-urls)


#### CvTerm 

This structure provides details of a controlled vocabulary term the image is about.

See [CV-Term structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#cv-term-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `Iptc4xmpExt:CvId` | String | URI | [CV-Term CV ID](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#cv-term-cv-id)
| `Iptc4xmpExt:CvTermId` | String | URI | [CV-Term ID](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#cv-term-id)
| `Iptc4xmpExt:CvTermName` | Structure | [Localizable text](#localizable-text) | [CV-Term Name](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#cv-term-name)
| `Iptc4xmpExt:CvTermRefinedAbout` | String | URI | [Refined 'about' Relationship of the CV-Term](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#refined-about-relationship-of-the-cv-term)


#### EmbdEncRightsExpr 

This structure provides details of an embedded encoded rights expression.

See [Embedded Encoded Rights Expression (EERE) structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#embedded-encoded-rights-expression-eere-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `Iptc4xmpExt:EncRightsExpr` | String | N/A | [Encoded Rights Expression](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#encoded-rights-expression)
| `Iptc4xmpExt:RightsExprEncType` | String | N/A | [Encoding type](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#encoding-type)
| `Iptc4xmpExt:RightsExprLangId` | String | URI | [Rights Expression Language ID](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#rights-expression-language-id)


#### Entity

This structure is a datatype for a named entity or concept.

See [Entity or Concept structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#entity-or-concept-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `xmp:Identifier` | String | URI | [Identifier](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#identifier)
| `Iptc4xmpExt:Name` | Structure | [Localizable text](#localizable-text) | [Name](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#name)


#### EntityWRole

This structure is a datatype for a named entity or concept with a role property.

See [Entity or Concept with role structures](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#entity-or-concept-with-role-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `xmp:Identifier` | String | URI | [Identifier](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#identifier-2)
| `Iptc4xmpExt:Name` | Structure | [Localizable text](#localizable-text) | [Name](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#name-2)
| `Iptc4xmpExt:Role` | String | N/A | [Role](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#role)


#### ImageCreator

This structure provides information on the creator(s) of an image. 	In many countries, the image creator must be attributed in association with any use of the image. The image creator, copyright owner, image supplier and licensor may be the same or different entities.

See [ImageCreator](http://ns.useplus.org/LDF/ldf-XMPSpecification#ImageCreator) in the Picture Licensing Universal System (PLUS) specification..

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `plus:ImageCreatorID` | String | N/A | [Image Creator ID](http://ns.useplus.org/LDF/ldf-XMPSpecification#ImageCreatorID)
| `plus:ImageCreatorName` | String | N/A | [Image Creator Name](http://ns.useplus.org/LDF/ldf-XMPSpecification#ImageCreatorName)


#### ImageRegion

This structure defines the boundaries of an image region, some characteristics of the image region, and metadata properties related to the region.

See [Image Region structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#image-region-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `Iptc4xmpExt:RegionBoundary` | Structure | [RegionBoundary](#regionboundary) | [Region Boundary](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#region-boundary)
| `Iptc4xmpExt:rId` | String | N/A | [Region Identifier](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#region-identifier)
| `Iptc4xmpExt:Name` | Structure | [Localizable text](#localizable-text) | [Region Name](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#region-name)
| `Iptc4xmpExt:rCtype` | Structure | Entity | [Region Content Type](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#region-content-type)
| `Iptc4xmpExt:rRole` | Structure | Entity | [Region Role](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#region-role)
| `Iptc4xmpExt:<other>` | Any | N/A | [Other metadata property](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#other-metadata-property)


#### ImageSupplier

This structure provides information on the party providing the image to the licensor or to the licensee on behalf of the licensor. 	In some instances, a licensor serves as an agent or distributor for a third party supplying the image either to the licensor, or directly to the Licensee. The image creator, copyright owner, image supplier and licensor may be the same or different entities.

See [ImageSupplier](http://ns.useplus.org/LDF/ldf-XMPSpecification#ImageSupplier) in the PLUS Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `plus:ImageSupplierID` | String | N/A | [Image Supplier ID](http://ns.useplus.org/LDF/ldf-XMPSpecification#ImageSupplierID)
| `plus:ImageSupplierName` | String | N/A | [Image Supplier Name](http://ns.useplus.org/LDF/ldf-XMPSpecification#ImageSupplierName)

#### Licensor

This structure provides information on the party or parties granting the license to the licensee.

See [Licensor](http://ns.useplus.org/LDF/ldf-XMPSpecification#Licensor) in the PLUS Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `plus:LicensorID` | String | N/A | [Licensor ID](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorID)
| `plus:LicensorName` | String | N/A | [Licensor Name](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorName)
| `plus:LicensorStreetAddress` | String | N/A | [Licensor Address](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorAddress)
| `plus:LicensorExtendedAddress` | String | N/A | [Licensor Address Detail](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorAddressDetail)
| `plus:LicensorCity` | String | N/A | [Licensor City](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorCity)
| `plus:LicensorRegion` | String | N/A | [Licensor State or Province](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorRegion)
| `plus:LicensorPostalCode` | String | N/A | [Licensor Postal Code](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorPostalCode)
| `plus:LicensorCountry` | String | N/A | [Licensor Country](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorCountry)
| `plus:LicensorTelephoneType1` | String | URL | [Licensor TelephoneType1](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorTelephoneType1)
| `plus:LicensorTelephone1` | String | N/A | [Licensor Telephone1](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorTelephone1)
| `plus:LicensorTelephoneType2` | String | URL | [Licensor TelephoneType2](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorTelephoneType2)
| `plus:LicensorTelephone2` | String | N/A | [Licensor Telephone2](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorTelephone2)
| `plus:LicensorEmail` | String | N/A | [Licensor Email](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorEmail)
| `plus:LicensorURL` | String | URL | [Licensor URL](http://ns.useplus.org/LDF/ldf-XMPSpecification#LicensorURL)

#### LinkedEncRightsExpr

This structure provides details of a linked encoded rights expression.

See [Linked Encoded Rights Expression (LERE) structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#linked-encoded-rights-expression-lere-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `Iptc4xmpExt:LinkedRightsExpr` | String | URL | [Link to Encoded Rights Expression](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#link-to-encoded-rights-expression)
| `Iptc4xmpExt:RightsExprEncType` | String | MIME Type / URI | [Encoding type](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#encoding-type-2)
| `Iptc4xmpExt:RightsExprLangId` | String | URI | [Rights Expression Language ID](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#rights-expression-language-id)


#### Location

This structure provides details about a location. 

See [Location structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#location-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `Iptc4xmpExt:City` | String | N/A | [City](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#city)
| `Iptc4xmpExt:CountryCode` | String | N/A | [Country Code](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#country-iso-code)
| `Iptc4xmpExt:CountryName` | String | N/A | [Country Name](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#country-name)
| `exif:GPSAltitude` | Number | N/A | [GPS Altitude](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#gps-altitude)
| `exif:GPSLatitude` | Number | N/A | [GPS Latitude](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#gps-latitude)
| `exif:GPSLongitude` | Number | N/A | [GPS Longitude](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#gps-longitude)
| `Iptc4xmpExt:LocationId` | String | URI | [Location Identifier](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#location-identifier)
| `Iptc4xmpExt:LocationName` | Structure | [Localizable text](#localizable-text) | [Location Name](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#location-name)
| `Iptc4xmpExt:ProvinceState` | String | N/A | [Province or State](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#province-or-state)
| `Iptc4xmpExt:Sublocation` | String | N/A | [Sublocation](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#sublocation)
| `Iptc4xmpExt:WorldRegion` | String | N/A | [World Region](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#world-region)


#### PersonWDetails

This structure provides details about a single person in the image.

See [Person structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#person-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `Iptc4xmpExt:PersonCharacteristic` | Structure | [CvTerm](#cvterm) | [Characteristics](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#characteristics)
| `Iptc4xmpExt:PersonDescription` | Structure | [Localizable text](#localizable-text) | [Description](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#description-2)
| `Iptc4xmpExt:PersonId` | String | URI | [Identifier](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#identifier-3)
| `Iptc4xmpExt:PersonName` | Structure | [Localizable text](#localizable-text) | [Name](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#name-3)


#### ProductWGtin

This structure provides details about a product.

See [Product structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#product-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `Iptc4xmpExt:ProductDescription` | Structure | [Localizable text](#localizable-text) | [Description](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#description-3)
| `Iptc4xmpExt:ProductGTIN` | String | N/A | [GTIN](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#gtin)
| `Iptc4xmpExt:ProductId` | String | URI | [Identifier](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#identifier-4)
| `Iptc4xmpExt:ProductName` | Structure | [Localizable text](#localizable-text) | [Name](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#name-4)


#### RegionBoundary

This structure defines the boundary of a region inside an image. It may define a single point to express special characteristics of the point, or may define a line to express a division of the image.

See [Region Boundary structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#region-boundary-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `Iptc4xmpExt:rbShape` | String | N/A | [rbShape](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#boundary-shape)
| `Iptc4xmpExt:rbUnit` | String | N/A | [rbUnit](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#boundary-measuring-unit)
| `Iptc4xmpExt:rbX` | Number | N/A | [rbX](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#x-axis-coordinate)
| `Iptc4xmpExt:rbY` | Number | N/A | [rbY](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#y-axis-coordinate)
| `Iptc4xmpExt:rbW` | Number | N/A | [rbW](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#rectangle-width)
| `Iptc4xmpExt:rbH` | Number | N/A | [rbH](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#rectangle-height)
| `Iptc4xmpExt:rbRx` | Number | N/A | [rbRx](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#circle-radius)
| `Iptc4xmpExt:rbVertices` | Structure | [RegionBoundaryPoint](#regionboundarypoint) | [rbVertices](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#polygon-vertices)


#### RegionBoundaryPoint

This structure defines a point in an image by its coordinates.

See [Region Boundary Point structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#region-boundary-point-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `Iptc4xmpExt:rbX` | Number | N/A | [rbX](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#x-axis-coordinate)
| `Iptc4xmpExt:rbY` | Number | N/A | [rbY](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#y-axis-coordinate)

#### RegistryEntry

This structure defines an entry in a registry, including the ID for the image issued by the registry and the registry’s ID.

See [Registry Entry structure](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#registry-entry-structure) in the IPTC Photo Metadata Specification.

| Property | Datatype | Data format | Specification link |
|----------|----------|-------------|-----------|
| `Iptc4xmpExt:RegItemId` | String | N/A | [Registry Item ID](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#item-id)
| `Iptc4xmpExt:RegOrgId` | String | N/A | [Registry Organization ID](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#organisation-id)
| `Iptc4xmpExt:RegEntryRole` | String | URI | [Role](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#role-2)


