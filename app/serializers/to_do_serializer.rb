class ToDoSerializer < ActiveModel::Serializer
  attributes :id, :to_do, :user_id, :date_due
end
