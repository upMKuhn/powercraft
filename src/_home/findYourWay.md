---
 title: Das Unternehmen
 layout: component/section
 class: pt-3
 index: 4
---

# Find your own way!
{: .mb-4}


{% assign childComponents = site.home  | where: "parent", "findYourWay" | sort: 'index' %}
{% for child in childComponents %}
{{ child | markdownify }}
{% endfor %}

 
