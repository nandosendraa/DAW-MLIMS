<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:strip-space elements="*" />
<xsl:template match="/">
Marks from // Programming //
---------------------------------
<xsl:apply-templates />
</xsl:template>

<xsl:template match="student">
<xsl:value-of select="name" /><xsl:text>&#32;</xsl:text><xsl:value-of select="lastname" />
<xsl:text>: </xsl:text><xsl:value-of select="credits/credit[name='Programming']/mark" /><xsl:text>&#10;</xsl:text>
</xsl:template>

</xsl:stylesheet>