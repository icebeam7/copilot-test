# Login to Azure
Connect-AzAccount

# Variables for the deployment
$resourceGroupName = "MyResourceGroup"
$location = "EastUS"
$vmName = "MyVM"
$adminUsername = "azureuser"
$adminPassword = ConvertTo-SecureString "P@ssw0rd1234!" -AsPlainText -Force
$vmSize = "Standard_DS1_v2"

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a virtual network
$vnet = New-AzVirtualNetwork -ResourceGroupName $resourceGroupName -Location $location `
    -Name "MyVNet" -AddressPrefix "10.0.0.0/16"

# Create a subnet
$subnet = Add-AzVirtualNetworkSubnetConfig -Name "MySubnet" -AddressPrefix "10.0.0.0/24" -VirtualNetwork $vnet
$vnet | Set-AzVirtualNetwork

# Create a public IP address
$publicIp = New-AzPublicIpAddress -ResourceGroupName $resourceGroupName -Location $location `
    -Name "MyPublicIP" -AllocationMethod Dynamic

# Create a network security group
$nsg = New-AzNetworkSecurityGroup -ResourceGroupName $resourceGroupName -Location $location `
    -Name "MyNSG"

# Create a network interface
$nic = New-AzNetworkInterface -ResourceGroupName $resourceGroupName -Location $location `
    -Name "MyNIC" -SubnetId $subnet.Id -PublicIpAddressId $publicIp.Id -NetworkSecurityGroupId $nsg.Id

# Create a virtual machine configuration
$vmConfig = New-AzVMConfig -VMName $vmName -VMSize $vmSize |
    Set