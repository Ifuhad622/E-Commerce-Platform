variable "aws_region" {
  description = "The AWS region to deploy to"
  default     = "us-west-2"
}

variable "ami_id" {
  description = "The AMI ID to use for the instance"
  default     = "ami-0c55b159cbfafe1f0"
}

variable "instance_type" {
  description = "The type of instance to deploy"
  default     = "t2.micro"
}
