<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:strip-space elements="*" />

<xsl:template match="/">
  <cities>
    <xsl:apply-templates />
  </cities>
</xsl:template>

<xsl:template match="museo">
  <city>
    <name><xsl:value-of select="city" /></name>
    <country><xsl:value-of select="country" /></country>
    <museo><xsl:value-of select="name" /></museo>
  </city>
</xsl:template>

</xsl:stylesheet>
