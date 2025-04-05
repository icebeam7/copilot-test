# Specify the required provider
provider "azurerm" {
  features {}
}

# Define the resource group
resource "azurerm_resource_group" "example" {
  name     = "example-resource-group"
  location = "East US"
}

# Define the storage account
resource "azurerm_storage_account" "example" {
  name                     = "examplestorageacct" # Must be globally unique
  resource_group_name      = azurerm_resource_group.example.name
  location                 = azurerm_resource_group.example.location
  account_tier             = "Standard"
  account_replication_type = "LRS"

  # Optional: Enable advanced features
  enable_https_traffic_only = true
  allow_blob_public_access  = false
}