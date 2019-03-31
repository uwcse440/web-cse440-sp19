---
layout: base/bar/bar-sidebar-right
title: Projects
---

<div class="sidebar_start"></div>

<div class="row">
<div class="col-md-12" markdown="block">
<div class="panel panel-default" style="margin-top:20px;">
<div class="panel-heading" markdown="block">
## Poster Session
</div>
<div class="panel-body" markdown="block">
Thank you for joining us to celebrate the outstanding design work of CSE 440 students:

Monday, December 10

11:00am to 12:30pm, Odegaard 141

<img src="{{ site.baseurl }}/images/poster_session.jpg" width="100%" alt="Poster Session"/>
</div>
</div>
</div>
</div>

<div class="sidebar_end"></div>

<!--div class="alert alert-danger" markdown="1">
This page is still being migrated and developed.
Information here is likely suggestive of the final page, but remains subject to change.
</div-->

# Project Theme


This quarter’s project theme will be __“Improve something out there”!__ This means you will have a unique chance to pick some interactive piece of tech that already exists and re-think it to make people happier about using it. Although you can start with something you know and love (or hate) you will also need to design for another group of people who is different from yourself. We will aim to make a really exciting design contribution to a product or service that will improve the user experience for different groups of people.

Over the course of the quarter, you will work as a group on designing an interactive technology to improve any aspect of daily life, for instance:

- Traveling
- Shopping
- Gaming
- Health care
- Working

You will need to define what are the specific user needs your project will support and what activity you would like to design that will help address these needs.
Think about how that activity is currently supported, what doesn't work about current ways of supporting it, and how your solution will do this better. 
The specificity of addressing particular groups of people allows you to deeply think about what makes each group unique and how your solution will best support them. So, dive in and see what you can come up with! 

# Project Websites

{% assign projects_count = site.data.projects.projects | size %}
{% assign projects_rows = projects_count | divided_by: 4 | plus: 1 %}

{% if projects_count == 0 %}
Will be linked here as course projects are proposed and developed.
{% endif %}

<div class="row">
  {% for item_project in site.data.projects.projects %}
    <div class="col-sm-3 col-xs-6">        
      <p>
        {% if item_project.publishlink %}
        <a href="{{ site.baseurl }}/projects/{{ item_project.path }}/" target="_blank">
          {{ item_project.name }}
        </a>
        {% else %}
          {{ item_project.name }}
        {% endif %}
      </p>
      <div class="thumbnailBox">
        {% if item_project.publishlink %}
        <a href="{{ site.baseurl }}/projects/{{ item_project.path }}/" target="_blank">
          <img src="{{ site.baseurl }}/projects/{{ item_project.path }}/project_thumb.png" width="150" class="projectThumbnail" alt="{{ item_project.name }}"/>
        </a>
        {% else %}
          <img src="{{ site.baseurl }}/projects/{{ item_project.path }}/project_thumb.png" width="150" class="projectThumbnail" alt="{{ item_project.name }}"/>
        {% endif %}
      </div>
      {% assign row_current = forloop.index | minus: 1 | divided_by: 4 | plus: 1 %}
      {% unless row_current == projects_rows %}
        <p>&nbsp;</p>
      {% endunless %}
    </div>
  {% endfor %}
</div>
