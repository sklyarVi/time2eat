class Recipe < ApplicationRecord
  include ActiveModel::API

  attr_accessor :title, :description, :published

  def title
    @title
  end

  def description
    @description
  end

  def published
    @published
  end
end
