---
 title: Das Unternehmen
 layout: component/section
 class: pt-3
 index: 4
---


{::options parse_block_html="true" /}
# Find your own way
{: .mb-4}

{% assign childComponents = site.findYourWayPoints  | sort: 'index' %}
<div class="d-flex flex-wrap d-flex justify-content-center list-unstyled">
{% for child in childComponents %}
{::options parse_block_html="false" /}
{{ child.output | markdownify}}
{::options parse_block_html="true" /}
{% endfor %}
</div>

 
