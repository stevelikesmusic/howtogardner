"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Download, FileText, Plus, FolderPlus, ImageIcon, File } from "lucide-react"

interface BlogPostForm {
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  featured: boolean
  tags: string[]
  readTime: string
  image: string
}

export function BlogManager() {
  const [formData, setFormData] = useState<BlogPostForm>({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    author: "John Smith",
    featured: false,
    tags: [],
    readTime: "",
    image: "",
  })

  const [newTag, setNewTag] = useState("")

  const categories = ["Architecture", "Leadership", "Management", "Cloud", "DevOps", "Strategy"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Generate slug from title
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

    // Generate current date
    const currentDate = new Date().toISOString().split("T")[0]

    // Create markdown content with front matter
    const frontMatter = `---
title: "${formData.title}"
excerpt: "${formData.excerpt}"
date: "${currentDate}"
readTime: "${formData.readTime || "auto"}"
category: "${formData.category}"
author: "${formData.author}"
featured: ${formData.featured}
tags: [${formData.tags.map((tag) => `"${tag}"`).join(", ")}]${formData.image ? `\nimage: "${formData.image}"` : ""}
---

${formData.content}`

    // Create and download the markdown file
    const blob = new Blob([frontMatter], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `index.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    // Create folder structure instructions
    const instructions = `
# Blog Post Setup Instructions

1. Create a new folder: public/blog-posts/${slug}/
2. Save the downloaded index.md file in this folder
3. Create subfolders for assets:
   - public/blog-posts/${slug}/images/ (for images)
   - public/blog-posts/${slug}/assets/ (for other files)
4. Add your images and assets to the respective folders
5. Reference them in your markdown using relative paths:
   - Images: ![Alt text](images/your-image.png)
   - Assets: [Download](assets/your-file.pdf)

Your blog post will be available at: /blog/${slug}
`

    // Download instructions
    const instructionsBlob = new Blob([instructions], { type: "text/plain" })
    const instructionsUrl = URL.createObjectURL(instructionsBlob)
    const instructionsLink = document.createElement("a")
    instructionsLink.href = instructionsUrl
    instructionsLink.download = `${slug}-setup-instructions.txt`
    document.body.appendChild(instructionsLink)
    instructionsLink.click()
    document.body.removeChild(instructionsLink)
    URL.revokeObjectURL(instructionsUrl)

    // Reset form
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      author: "John Smith",
      featured: false,
      tags: [],
      readTime: "",
      image: "",
    })
  }

  const addTag = () => {
    if (newTag && !formData.tags.includes(newTag)) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag],
      }))
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const generateSlug = () => {
    return formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Blog Post Manager</h1>
          <p className="text-slate-600">Create and manage blog posts with organized folder structure</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderPlus className="h-5 w-5" />
              Create New Blog Post
            </CardTitle>
            <CardDescription>Generate a blog post with proper folder structure for images and assets</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                    required
                  />
                  {formData.title && (
                    <p className="text-sm text-slate-500">
                      Slug: <code className="bg-slate-100 px-1 rounded">{generateSlug()}</code>
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt *</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Brief description of the article..."
                  rows={3}
                  required
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData((prev) => ({ ...prev, author: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="readTime">Read Time (optional)</Label>
                  <Input
                    id="readTime"
                    value={formData.readTime}
                    onChange={(e) => setFormData((prev) => ({ ...prev, readTime: e.target.value }))}
                    placeholder="e.g., 5 min read"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Featured Image Path</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
                    placeholder="e.g., images/hero.png"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Tags</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a tag..."
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  />
                  <Button type="button" onClick={addTag} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                      {tag} ×
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, featured: checked }))}
                />
                <Label htmlFor="featured">Featured Article</Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content (Markdown) *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                  placeholder="Write your article content in Markdown format...

# Your Article Title

Your content here...

## Using Images
![Alt text](images/your-image.png)

## Using Assets
[Download PDF](assets/your-document.pdf)"
                  rows={15}
                  className="font-mono"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Generate Blog Post Files
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 space-y-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <FolderPlus className="h-5 w-5" />
                Folder Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-800">
              <p className="mb-4">Your blog post will be organized in the following structure:</p>
              <pre className="bg-blue-100 p-3 rounded text-sm">
                {`public/blog-posts/
  your-post-slug/
    index.md          # Main blog post content
    images/           # Image assets
      hero.png
      diagram.svg
    assets/           # Other files
      document.pdf
      code-sample.js`}
              </pre>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900">
                <FileText className="h-5 w-5" />
                Setup Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-800">
              <ol className="space-y-2 list-decimal list-inside">
                <li>Fill out the form above with your blog post details</li>
                <li>Click "Generate Blog Post Files" to download the index.md file and setup instructions</li>
                <li>Create the folder structure as shown in the instructions</li>
                <li>Add your images to the images/ folder and reference them with relative paths</li>
                <li>Add other assets to the assets/ folder</li>
                <li>Your blog post will automatically appear on the website</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-900">
                <ImageIcon className="h-5 w-5" />
                Asset Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-800">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <ImageIcon className="h-4 w-4" />
                    Images
                  </h4>
                  <ul className="text-sm space-y-1 ml-6 list-disc">
                    <li>
                      Use relative paths: <code className="bg-amber-100 px-1 rounded">images/your-image.png</code>
                    </li>
                    <li>Supported formats: PNG, JPG, SVG, WebP</li>
                    <li>Optimize images for web (recommended max width: 1200px)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <File className="h-4 w-4" />
                    Assets
                  </h4>
                  <ul className="text-sm space-y-1 ml-6 list-disc">
                    <li>
                      Use relative paths: <code className="bg-amber-100 px-1 rounded">assets/document.pdf</code>
                    </li>
                    <li>Supported formats: PDF, ZIP, JSON, CSV, etc.</li>
                    <li>Keep file sizes reasonable for download</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
